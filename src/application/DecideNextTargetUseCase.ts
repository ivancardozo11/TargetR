import { injectable, inject } from 'inversify';
import { IProtocol } from '../domain/protocols/IProtocol';
import { ScanPoint } from '../domain/entities/ScanPoint';

@injectable()
export class DecideNextTargetUseCase {
  private protocolRegistry: Map<string, IProtocol>;

  constructor(
    @inject('AvoidMech') private avoidMech: IProtocol,
    @inject('ClosestEnemies') private closestEnemies: IProtocol,
    @inject('FurthestEnemies') private furthestEnemies: IProtocol,
    @inject('AssistAllies') private assistAllies: IProtocol,
    @inject('AvoidCrossfire') private avoidCrossfire: IProtocol,
    @inject('PrioritizeMech') private prioritizeMech: IProtocol
  ) {
    // Registro de protocolos
    this.protocolRegistry = new Map([
      ['avoid-mech', this.avoidMech],
      ['closest-enemies', this.closestEnemies],
      ['furthest-enemies', this.furthestEnemies],
      ['assist-allies', this.assistAllies],
      ['avoid-crossfire', this.avoidCrossfire],
      ['prioritize-mech', this.prioritizeMech],
    ]);
  }

  async execute(data: { protocols: string[]; scan: ScanPoint[] }): Promise<{ x: number; y: number } | null> {
    const { protocols, scan } = data;

    let target: ScanPoint | null = null;

    for (const protocolName of protocols) {
      const protocol = this.protocolRegistry.get(protocolName);
      if (!protocol) {
        throw new Error(`Unsupported protocol: ${protocolName}`);
      }

      target = protocol.execute(scan);
      if (target) break;
    }

    if (!target) {
      throw new Error('No valid target found.');
    }

    return target.coordinates;
  }
}

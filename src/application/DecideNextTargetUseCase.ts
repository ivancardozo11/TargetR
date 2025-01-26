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
    this.protocolRegistry = new Map([
      ['avoid-mech', this.avoidMech],
      ['closest-enemies', this.closestEnemies],
      ['furthest-enemies', this.furthestEnemies],
      ['assist-allies', this.assistAllies],
      ['avoid-crossfire', this.avoidCrossfire],
      ['prioritize-mech', this.prioritizeMech],
    ]);
  }

  private calculateDistance(x: number, y: number): number {
    return Math.sqrt(x ** 2 + y ** 2);
  }


  private ensureNotEmpty(scanPoints: ScanPoint[], errorMessage: string): void {
    if (scanPoints.length === 0) {
      throw new Error(errorMessage);
    }
  }

 
  async execute(data: { protocols: string[]; scan: ScanPoint[] }): Promise<{ x: number; y: number } | null> {
    const { protocols, scan } = data;

    let filteredScan = scan.filter((point) => {
      const distance = this.calculateDistance(point.coordinates.x, point.coordinates.y);
      return distance <= 100;
    });

    this.ensureNotEmpty(filteredScan, 'No valid target found. All points are out of range.');

    for (const protocolName of protocols) {
      const protocol = this.protocolRegistry.get(protocolName);
      if (!protocol) {
        throw new Error(`Unsupported protocol: ${protocolName}`);
      }

      filteredScan = protocol.execute(filteredScan);
      this.ensureNotEmpty(filteredScan, `No valid target found after applying protocol: ${protocolName}`);
    }

    const target = filteredScan[0];
    if (!target) {
      throw new Error('No valid target found.');
    }

    return { x: target.coordinates.x, y: target.coordinates.y };
  }
}

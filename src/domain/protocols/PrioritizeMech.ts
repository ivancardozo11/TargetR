import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class PrioritizeMech implements IProtocol {
  execute(scanPoints: ScanPoint[]): ScanPoint[] {
    const mechPoints = scanPoints.filter((p) => p.enemies.type === 'mech');
    if (mechPoints.length > 0) {
      return mechPoints;
    }
    return scanPoints;
  }
}

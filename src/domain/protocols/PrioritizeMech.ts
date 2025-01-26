import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class PrioritizeMech implements IProtocol {
  execute(scanPoints: ScanPoint[]): ScanPoint | null {
    if (!scanPoints || scanPoints.length === 0) {
      return null;
    }

    const mechPoint = scanPoints.find((point) => point.enemies.type === 'mech');
    if (mechPoint) {
      return mechPoint;
    }

    return scanPoints.length > 0 ? scanPoints[0] : null;
  }
}

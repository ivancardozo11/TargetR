import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class FurthestEnemies implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint | null {
    if (scan.length === 0) {
      return null;
    }

    return scan.reduce((furthest: ScanPoint, point: ScanPoint) => {
      const furthestDistance = Math.sqrt(
        furthest.coordinates.x ** 2 + furthest.coordinates.y ** 2
      );
      const currentDistance = Math.sqrt(
        point.coordinates.x ** 2 + point.coordinates.y ** 2
      );

      return currentDistance > furthestDistance ? point : furthest;
    });
  }
}

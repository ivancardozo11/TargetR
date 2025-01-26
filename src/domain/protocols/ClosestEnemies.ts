import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class ClosestEnemies implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint | null {
    if (scan.length === 0) {
      return null; // No hay puntos para analizar
    }

    return scan.reduce((closest: ScanPoint, point: ScanPoint) => {
      const closestDistance = Math.sqrt(
        closest.coordinates.x ** 2 + closest.coordinates.y ** 2
      );
      const currentDistance = Math.sqrt(
        point.coordinates.x ** 2 + point.coordinates.y ** 2
      );

      return currentDistance < closestDistance ? point : closest;
    });
  }
}

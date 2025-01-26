import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

function distance(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}

export class ClosestEnemies implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint[] {
    return scan.slice().sort((a, b) => {
      const distA = distance(a.coordinates.x, a.coordinates.y);
      const distB = distance(b.coordinates.x, b.coordinates.y);
      return distA - distB;
    });
  }
}

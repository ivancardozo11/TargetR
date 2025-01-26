import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class AvoidMech implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint | null {
    return scan.find((point) => point.enemies.type !== 'mech') || null;
  }
}

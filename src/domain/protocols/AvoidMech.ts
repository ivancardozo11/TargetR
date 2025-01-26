import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class AvoidMech implements IProtocol {
  
  execute(scan: ScanPoint[]): ScanPoint[] {
    return scan.filter((point) => point.enemies.type !== 'mech');
  }
}

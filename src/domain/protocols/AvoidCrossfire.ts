import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';


export class AvoidCrossfire implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint[] {
    return scan.filter((point) => !point.allies || point.allies === 0);
  }
}

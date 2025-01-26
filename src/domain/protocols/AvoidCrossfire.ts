import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';

export class AvoidCrossfire implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint | null {
    return scan.find((point) => !point.allies || point.allies === 0) || null;
  }
}

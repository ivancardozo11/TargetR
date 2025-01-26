import { IProtocol } from './IProtocol';
import { ScanPoint } from '../entities/ScanPoint';


export class AssistAllies implements IProtocol {
  execute(scan: ScanPoint[]): ScanPoint[] {
    return scan.filter((point) => (point.allies ?? 0) > 0);
  }
}

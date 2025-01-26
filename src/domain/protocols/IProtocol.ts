import { ScanPoint } from "../entities/ScanPoint";

export interface IProtocol {
    execute(scan: ScanPoint[]): ScanPoint | null;
  }
  
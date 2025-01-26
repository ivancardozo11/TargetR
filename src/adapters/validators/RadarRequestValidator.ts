import { ValidationError } from '../../domain/exceptions/ValidationError';
import { ScanPoint } from '../../domain/entities/ScanPoint';

export class RadarRequestValidator {
  static validate(data: unknown): { protocols: string[]; scan: ScanPoint[] } {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      throw new ValidationError('Request body must be a valid JSON object.');
    }

    const { protocols, scan } = data as Partial<{
      protocols: string[];
      scan: {
        coordinates: { x: number; y: number };
        enemies: { type: string; number: number };
        allies?: number;
      }[];
    }>;

   
    if (!Array.isArray(protocols) || !protocols.every((p) => typeof p === 'string')) {
      throw new ValidationError('"protocols" must be a non-empty array of strings.');
    }

    if (!Array.isArray(scan) || scan.length === 0) {
      throw new ValidationError('"scan" must be a non-empty array.');
    }

    const validatedScan = scan.map((point, index) => {
      const { coordinates, enemies, allies } = point;

      if (
        !coordinates ||
        typeof coordinates.x !== 'number' ||
        typeof coordinates.y !== 'number'
      ) {
        throw new ValidationError(
          `Scan point ${index} has invalid "coordinates". Must include "x" and "y" as numbers.`
        );
      }

      if (
        !enemies ||
        typeof enemies.type !== 'string' ||
        typeof enemies.number !== 'number'
      ) {
        throw new ValidationError(
          `Scan point ${index} has invalid "enemies". Must include "type" (string) and "number" (number).`
        );
      }

      if (allies !== undefined && typeof allies !== 'number') {
        throw new ValidationError(
          `Scan point ${index} has invalid "allies". If provided, it must be a number.`
        );
      }

      return new ScanPoint(coordinates, enemies, allies);
    });

    return { protocols, scan: validatedScan };
  }
}

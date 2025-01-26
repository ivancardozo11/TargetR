export class ScanPoint {
    coordinates: { x: number; y: number };
    enemies: { type: string; number: number };
    allies?: number;
  
    constructor(
      coordinates: { x: number; y: number },
      enemies: { type: string; number: number },
      allies?: number
    ) {
      this.coordinates = coordinates;
      this.enemies = enemies;
      this.allies = allies;
    }
  }
  
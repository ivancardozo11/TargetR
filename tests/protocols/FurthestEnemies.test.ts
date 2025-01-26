import { FurthestEnemies } from '../../src/domain/protocols/FurthestEnemies';
import { ScanPoint } from '../../src/domain/entities/ScanPoint';

describe('FurthestEnemies Protocol', () => {
  it('order the points from longest to shortest distance', () => {
    const protocol = new FurthestEnemies();

    const points: ScanPoint[] = [
      new ScanPoint({ x: 10, y: 10 }, { type: 'soldier', number: 5 }),
      new ScanPoint({ x: 1,  y: 1  }, { type: 'soldier', number: 3 }),
      new ScanPoint({ x: 5,  y: 5  }, { type: 'soldier', number: 2 }),
    ];

    const result = protocol.execute(points);

    expect(result[0].coordinates).toEqual({ x: 10, y: 10 });
    expect(result[1].coordinates).toEqual({ x: 5, y: 5 });
    expect(result[2].coordinates).toEqual({ x: 1, y: 1 });
  });
});

import { ClosestEnemies } from '../../src/domain/protocols/ClosestEnemies';
import { ScanPoint } from '../../src/domain/entities/ScanPoint';

describe('ClosestEnemies Protocol', () => {
  it('order the points from smallest to greatest distance', () => {
    const protocol = new ClosestEnemies();

    const points: ScanPoint[] = [
      new ScanPoint({ x: 10, y: 10 }, { type: 'soldier', number: 5 }),
      new ScanPoint({ x: 1,  y: 1  }, { type: 'mech',    number: 1 }),
      new ScanPoint({ x: 5,  y: 5  }, { type: 'soldier', number: 2 }),
    ];

    const result = protocol.execute(points);

    expect(result[0].coordinates).toEqual({ x: 1, y: 1 });
    expect(result[1].coordinates).toEqual({ x: 5, y: 5 });
    expect(result[2].coordinates).toEqual({ x: 10, y: 10 });
  });
});

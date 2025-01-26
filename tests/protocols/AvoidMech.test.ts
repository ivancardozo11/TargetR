import { AvoidMech } from '../../src/domain/protocols/AvoidMech';
import { ScanPoint } from '../../src/domain/entities/ScanPoint';

describe('AvoidMech Protocol', () => {
  it('discard points with enemy.type = "mech"', () => {
    const protocol = new AvoidMech();

    const points: ScanPoint[] = [
      new ScanPoint({ x: 0, y: 0 }, { type: 'mech', number: 1 }),
      new ScanPoint({ x: 10, y: 5 }, { type: 'soldier', number: 3 }),
      new ScanPoint({ x: 5,  y: 5 }, { type: 'mech', number: 2 }),
    ];

    const result = protocol.execute(points);

    expect(result).toHaveLength(1);
    expect(result[0].enemies.type).toBe('soldier');
  });
});

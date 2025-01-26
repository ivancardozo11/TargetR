import { PrioritizeMech } from '../../src/domain/protocols/PrioritizeMech';
import { ScanPoint } from '../../src/domain/entities/ScanPoint';

describe('PrioritizeMech Protocol', () => {
  it('if there are mechs, return ONLY mechs; if not, pass all', () => {
    const protocol = new PrioritizeMech();

    const points: ScanPoint[] = [
      new ScanPoint({ x: 0, y: 0 }, { type: 'soldier', number: 1 }),
      new ScanPoint({ x: 1, y: 1 }, { type: 'mech',    number: 1 }),
      new ScanPoint({ x: 2, y: 2 }, { type: 'soldier', number: 1 }),
    ];

    let result = protocol.execute(points);
    expect(result).toHaveLength(1);
    expect(result[0].enemies.type).toBe('mech');

    const onlySoldiers: ScanPoint[] = [
      new ScanPoint({ x: 3, y: 3 }, { type: 'soldier', number: 1 }),
    ];
    result = protocol.execute(onlySoldiers);

    expect(result).toHaveLength(1);
    expect(result[0].enemies.type).toBe('soldier');
  });
});

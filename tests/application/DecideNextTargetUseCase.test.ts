import { DecideNextTargetUseCase } from '../../src/application/DecideNextTargetUseCase';
import container from '../../src/infrastructure/inversify.config';
import { ScanPoint } from '../../src/domain/entities/ScanPoint';

describe('DecideNextTargetUseCase', () => {
  let useCase: DecideNextTargetUseCase;

  beforeAll(() => {
    useCase = container.get(DecideNextTargetUseCase);
  });

  it('', async () => {
    const data = {
      protocols: ['closest-enemies'],
      scan: [
       
        new ScanPoint({ x: 10, y: 90 }, { type: 'soldier', number: 5 }),
        new ScanPoint({ x: 1, y: 1 }, { type: 'soldier', number: 1 }),
      ],
    };

    const result = await useCase.execute(data);
    expect(result).toEqual({ x: 1, y: 1 });
  });

  it('combina (avoid-mech) y (closest-enemies)', async () => {
    const data = {
      protocols: ['avoid-mech', 'closest-enemies'],
      scan: [
        new ScanPoint({ x: 0, y: 10 }, { type: 'soldier', number: 5 }),
        new ScanPoint({ x: 0, y: 20 }, { type: 'mech', number: 2 }),
        new ScanPoint({ x: 0, y: 30 }, { type: 'mech', number: 3 }),
      ],
    };

    const result = await useCase.execute(data);
    expect(result).toEqual({ x: 0, y: 10 });
  });
});

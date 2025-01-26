import { RadarRequestValidator } from '../../src/adapters/validators/RadarRequestValidator';
import { ValidationError } from '../../src/domain/exceptions/ValidationError';

describe('RadarRequestValidator', () => {
  it('throws ValidationError if the input is not an object', () => {
    expect(() => {
      RadarRequestValidator.validate(null as any);
    }).toThrow(ValidationError);

    expect(() => {
      RadarRequestValidator.validate([] as any);
    }).toThrow(ValidationError);
  });

  it('throws ValidationError if "protocols" is not an array of strings', () => {
    expect(() => {
      RadarRequestValidator.validate({ protocols: 123, scan: [] });
    }).toThrow(ValidationError);
  });

  it('throws ValidationError if "scan" is empty', () => {
    expect(() => {
      RadarRequestValidator.validate({ protocols: ['test'], scan: [] });
    }).toThrow(ValidationError);
  });

  it('correctly validates a valid request body', () => {
    const body = {
      protocols: ['closest-enemies'],
      scan: [
        {
          coordinates: { x: 0, y: 50 },
          enemies: { type: 'soldier', number: 10 },
        },
      ],
    };

    const result = RadarRequestValidator.validate(body);
    expect(result.protocols).toEqual(['closest-enemies']);
    expect(result.scan).toHaveLength(1);
    expect(result.scan[0].coordinates).toEqual({ x: 0, y: 50 });
  });
});

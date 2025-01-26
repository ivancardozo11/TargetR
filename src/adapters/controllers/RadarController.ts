import { inject, injectable } from 'inversify';
import { Request, Response, NextFunction } from 'express';
import { DecideNextTargetUseCase } from '../../application/DecideNextTargetUseCase';
import { RadarRequestValidator } from '../validators/RadarRequestValidator';

@injectable()
export class RadarController {
  private decideNextTargetUseCase: DecideNextTargetUseCase;

  constructor(
    @inject(DecideNextTargetUseCase) decideNextTargetUseCase: DecideNextTargetUseCase
  ) {
    this.decideNextTargetUseCase = decideNextTargetUseCase;
  }

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedData = RadarRequestValidator.validate(req.body);

      const result = await this.decideNextTargetUseCase.execute(validatedData);

      res.status(200).json(result);
    } catch (error: any) {
      next(error);
    }
  }
}

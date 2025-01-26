import { Container } from 'inversify';
import { DecideNextTargetUseCase } from '../application/DecideNextTargetUseCase';
import { AvoidMech } from '../domain/protocols/AvoidMech';
import { ClosestEnemies } from '../domain/protocols/ClosestEnemies';
import { FurthestEnemies } from '../domain/protocols/FurthestEnemies';
import { AssistAllies } from '../domain/protocols/AssistAllies';
import { AvoidCrossfire } from '../domain/protocols/AvoidCrossfire';
import { PrioritizeMech } from '../domain/protocols/PrioritizeMech';
import { RadarController } from '../adapters/controllers/RadarController';

const container = new Container();

container.bind(DecideNextTargetUseCase).to(DecideNextTargetUseCase);

container.bind('AvoidMech').to(AvoidMech);
container.bind('ClosestEnemies').to(ClosestEnemies);
container.bind('FurthestEnemies').to(FurthestEnemies);
container.bind('AssistAllies').to(AssistAllies);
container.bind('AvoidCrossfire').to(AvoidCrossfire);
container.bind('PrioritizeMech').to(PrioritizeMech);

container.bind(RadarController).to(RadarController);

export default container;

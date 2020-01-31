import AppError from '../../utils/application_errors';
import { User } from '../../models';



function checkPerm (action) {
  return (object) => {
    return async (req, res, next) => {
      try {
        const  {authorizationData: {id: actorId }} = req;
        const {roles} = (await User.findByPk(actorId)).get();
        next(new AppError.ForbiddenError() );
      }catch (e) {
        next (e);
      }
    }
  };
}


const checkCreateTaskPermissions = checkPerm('CREATE')('TASK');
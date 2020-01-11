import { User } from '../../user.model';

export interface IAuthState {
  isAuth: boolean;
  user: User;
}

export const initialAuthState: IAuthState = {
  isAuth: false,
  user: null
};

import {User} from '../user';

export const Profile = (user)=>{
  if(!!user){
    return user.name;
  }

  return User();
}
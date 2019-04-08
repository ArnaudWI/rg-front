export default function (user = {}, action) {
  if(action.type === 'setUserData') {
    let userCopy = {
      ...user,
      name: action.name,
      firstName: action.firstName,
      email: action.email
    }
    return userCopy;
  } else {
    return user;
  }
};

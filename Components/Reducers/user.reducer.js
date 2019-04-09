export default function (user = {}, action) {
  if(action.type === 'setUserData') {
    let userCopy = {
      ...user,
      name: action.name,
      firstName: action.firstName,
      email: action.email,
      id: action.id
    }
    return userCopy;
  } else {
    return user;
  }
};

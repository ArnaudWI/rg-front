export default function (user = {}, action) {
  if(action.type === 'setUserData') {
    let userCopy = {
      ...user,
      lastName: action.name,
      firstName: action.firstName,
      email: action.email,
      id: action.id,
      admin: action.admin
    }
    return userCopy;
  } else {
    return user;
  }
};

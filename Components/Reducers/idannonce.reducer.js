export default function (id = {}, action) {
  if(action.type === 'idAnnonce') {
    let idCopy = {
      ...id,
      id: action.id,
    }
    return idCopy;
  } else {
    return id;
  }
};

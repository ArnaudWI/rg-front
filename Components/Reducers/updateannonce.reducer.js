export default function (updateAnnonce = {}, action) {
  if(action.type === 'updateAnnonce') {
    let updateAnnonceCopy = {
      ...updateAnnonce,
      id: action.id,
      typeAnnonce: action.typeAnnonce,
      content: action.content,
      title: action.title
    }
    return updateAnnonceCopy;
  } else {
    return updateAnnonce;
  }
};

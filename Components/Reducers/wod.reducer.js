export default function (wod = {}, action) {
  if(action.type === 'wodUpdate') {
    let wodCopy = {
      ...wod,
      wod: action.wod,
      date: action.date
    }
    return wodCopy;
  } else {
    return wod;
  }
};

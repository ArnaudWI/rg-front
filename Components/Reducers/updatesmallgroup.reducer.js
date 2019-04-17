export default function (updateSmallGroup = {}, action) {
  if(action.type === 'updateSmallGroup') {
    let updateSmallGroupCopy = {
      ...updateSmallGroup,
      id: action.id,
      discipline: action.discipline,
      date: action.date,
      hour: action.hour,
      nbrParticipants: action.nbrParticipants,
      price: action.price,
      programme: action.programme
    }
    console.log(updateSmallGroupCopy);
    return updateSmallGroupCopy;
  } else {
    return updateSmallGroup;
  }
};

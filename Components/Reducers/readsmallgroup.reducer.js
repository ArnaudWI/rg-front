export default function (readSmallGroup = {}, action) {
  if(action.type === 'readSmallGroup') {
    let readSmallGroupCopy = {
      ...readSmallGroup,
      id: action.id,
      discipline: action.discipline,
      date: action.date,
      hour: action.hour,
      nbrParticipants: action.nbrParticipants,
      price: action.price,
      programme: action.programme,
      participantList: action.participantList
    }
    return readSmallGroupCopy;
  } else {
    return readSmallGroup;
  }
};

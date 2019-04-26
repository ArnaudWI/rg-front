export default function (discipline = '', action) {
  if(action.type === 'disciplineChoosen') {
    discipline = action.disciplineChoosen;
    return discipline;
  } else {
    return discipline;
  }
};

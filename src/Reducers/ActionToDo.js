import { SET_ACTION_TODO } from '../Constants/ActionTypes';

const initialState = {
  text: '',
  completed: false,
  id: 0
};

export default function actionToDo(state = initialState, action){
  switch(action.type){
    case SET_ACTION_TODO:
      state.text = action.text?action.text:'';
      state.completed = action.completed?action.completed:false;
      state.id = action.id?action.id:0;
      return state;
    default:
    return state;
  }
}

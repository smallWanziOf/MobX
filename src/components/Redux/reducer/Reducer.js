/**
 * 这里将所有的reducer都合并在一起，不同的reducer进行分开处理
 */

import {combineReducers} from 'redux';

function ChangeNum(state = [] , action){
  switch(action.type){
    case 'ADD_NUM' :
    return [...state,action.text];
    case 'CLEAR' :
    return [];
    default : 
    return state;
  }
}

function MoreThanZero(state = [],action){
  switch(action.type){
    case 'MORE_THAN_ZERO':
    return action.text.filter(x=>x>0);
    default :
    return state;
  }
}

const Reducers = combineReducers({
  ChangeNum,
  MoreThanZero
});

export default Reducers;
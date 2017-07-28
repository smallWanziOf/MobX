/**
 * MORE_THAN_ZERO:用户操作显示大于0的数字
 * ADD_NUM:state中添加新的成员
 * CLEAR:清除state
 * 这里针对不同的操作分开了两个函数，便于后期的维护和代码的整洁性但让你也可以制造一个可复用的函数
 */
const MORE_THAN_ZERO = 'MORE_THAN_ZERO';
const ADD_NUM = 'ADD_NUM';
const CLEAR = 'CLEAR';
export function MoreThanZero(text){
  return {type:MORE_THAN_ZERO,text}
}

export function AddNum(text){
  return {type:ADD_NUM,text}
}

export function Clear(text){
  return {type:CLEAR,text}
}
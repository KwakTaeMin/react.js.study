import * as types from './ActionTypes';
// import {INCREMENT, DECREMENT, SET_DIFF} from './ActionTypes'

export function increment() {
    return {
        type : types.INCREMENT
    };
}

export function decrement() {
    return {
        type : types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color // color : color 와 같다
    };
}

// 엑션이 몇개 없기 때문에 한 파일에 넣었지만, 많아지면 분류에 따라 넣어주는것이 좋다.
// 숫자 별
// 유저 인터페이스 별
// 등등 객체지향 적으로 나누면 좋다.

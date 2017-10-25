import * as types from '../actions/ActionTypes';

const initialState = {
    number : 0
};

export default function counter(state = initialState, action) {
    /*
    밑에 코드는
    파라미터 부분에 state = initialState 와 같은 코드다

    if(typeof state == 'undefined') {
        return initialState;
    }
    */

    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state ,
                number: state.number + 1
            };  // 기존의 state를 유지하면서 number만 업데이트하는 것
            break;
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
            break;
        default:
            return state;

    }
}

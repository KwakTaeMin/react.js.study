import * as types from './ChatActionTypes';
// import {INCREMENT, DECREMENT, SET_DIFF} from './ActionTypes'

export function sendMessage() {
    return {
        type : types.SEND_MESSAGE
    };
}

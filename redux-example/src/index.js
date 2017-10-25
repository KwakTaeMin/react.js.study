import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';
const store = createStore(reducers);

ReactDom.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


/*
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.increment());
store.dispatch(actions.setColor([200, 200, 200]));

unsubscribe();

store.dispatch(actions.setColor([210, 210, 210]));
*/
// store가 하는 일
// dispatch(action) - action을 reducer로 보낸다.
// 변화가 있으면 변경된다.
// getState()
// subscribe(listener)

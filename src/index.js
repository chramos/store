import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

const reducer = (state = {
    cartCount: 0
}, action) => {
    switch(action.type) {
        case 'CHANGE_CART':
            state = {
                ...state,
                cartCount: action.payload
            }
        break;
        default:

    }

    return state;
    
}

const store = createStore(reducer);

// store.dispatch({
//     type: 'CHANGE_CART',
//     payload: 10,
// })

ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

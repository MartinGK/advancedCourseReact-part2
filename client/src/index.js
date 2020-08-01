import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App';
import Welcome from 'components/Welcome';
import Signup from 'components/auth/Signup';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'store/reducers';


ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome} />
                <Route path='/SignUp' exact component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/PostIndex.jsx';
import PostDetail from './components/PostDetail.jsx';
import PostNew from './components/PostNew.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostDetail} />
                <Route path="/" component={PostIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);

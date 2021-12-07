// import store from "./components/Redux/Store";
import store from "./components/Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";


let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </React.StrictMode>,
    document.getElementById('root')
)
    ;
};

rerenderAllTree(store.getState());

store.subscribe(() => {
    // let state = store.getState();
    rerenderAllTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
    {id: 1, message: "... im sleep!"},
    {id: 2, message: "Hey. i'm write new post for you"},
    {id: 3, message: "Today i learning react. I no sleep!"},
    {id: 4, message: "Today Tomorrow Forever"}
];

let DialogsData = [
    {id: 1, name: "Pew"},
    {id: 2, name: "Fedor"},
    {id: 3, name: "lina"},
    {id: 4, name: "Katja"}
];

let MessagesData = [
    {id: 1, message: "polt?"},
    {id: 2, message: "he"},
    {id: 3, message: "Yo and two"},
    {id: 4, message: "good??"}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={PostsData} dialogs={DialogsData} messages={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

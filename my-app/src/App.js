import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// themeforest social networks преобразовать соцсеть

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='profile' element={<Profile postsApp={props.posts}/>}/>
                        <Route path='messages'
                               element={<Dialogs dialogsApp={props.dialogs} messagesApp={props.messages}/>}/>
                        <Route path='news' element={"#"}/>
                        <Route path='music' element={"#"}/>
                        <Route path='settings' element={"#"}/>
                        {/*<Route path='/profile' component={Profile}/>*/}
                        {/*<Route path='/messages' component={Dialogs}/>*/}
                        {/*<Route path='profile' component={ () => <Profile />}/>*/}
                        {/*<Route path='messages' render = { () => <Dialogs />}/>*/}

                    </Routes>
                    {/*<Dialogs/>*/}
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    )
        ;
};

export default App;

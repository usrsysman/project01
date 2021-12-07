import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


// themeforest social networks преобразовать соцсеть

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='profile'
                               element={<Profile state={props.state} dispatch={props.dispatch} />}/>
                        <Route path='messages' element={<DialogsContainer state={props.state} dispatch={props.dispatch}/>}/>
                        <Route path='news' element={"#"}/>
                        <Route path='music' element={"#"}/>
                        <Route path='settings' element={"#"}/>
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

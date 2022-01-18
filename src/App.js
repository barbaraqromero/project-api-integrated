import react, {Component} from "react";
import "./App.css";
import Login from "./componentes/pages/Login/login";

export default class App extends Component {
    render(){
        return(
            <div className="App">
                <Login />
            </div>
        );
    }
}



import react, {Component} from "react";
import "./App.css";
import LandingPage from "./componentes/pages/LandingPage/landinpage";
import Login from "./componentes/pages/LandingPage/landinpage";


export default class App extends Component {
    render(){
        return(
            <div className="LandingPage">
                <LandingPage />
            </div>
        );
    }
}



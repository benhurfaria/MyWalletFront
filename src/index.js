import  ReactDOM  from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Timeline from "./Components/Timeline";
import "./Estilos/reset.css";
import "./Estilos/style.css";
const App = ()=>{
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Signin></Signin>
          </Route>
          <Route path="/sign-up" exact>
            <Signup></Signup>
          </Route>
          <Route path="/timeline">
            <Timeline></Timeline>
          </Route>
          <Route path="/entrada" exact>

          </Route>
          <Route path="/saida" exact>

          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App/>, document.querySelector(".root"));
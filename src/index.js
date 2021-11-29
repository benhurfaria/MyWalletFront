import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Timeline from './Components/Timeline';
import Entrada from './Components/Entrada';
import Saida from './Components/Saida';
import './Estilos/reset.css';
import './Estilos/style.css';
import { ContextLogin } from './Components/Context';

const App = () => {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <ContextLogin.Provider value={{ loggedUser, setLoggedUser }}>
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
            <Entrada />
          </Route>
          <Route path="/saida" exact>
            <Saida />
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextLogin.Provider>
  );
};
ReactDOM.render(<App />, document.querySelector('.root'));

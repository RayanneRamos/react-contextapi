import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/index';
import Feira from './pages/Feira/index';
import Carrinho from './pages/Carrinho/index';
import { UsuarioProvider } from './common/contexts/Usuario';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">  
            <Login />
          </Route>
          <Route path="/feira">
            <Feira />
          </Route>
        </UsuarioProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/index';
import Feira from './pages/Feira/index';
import Carrinho from './pages/Carrinho/index';
import { UsuarioProvider } from './common/contexts/Usuario';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
            <Login />
          </UsuarioProvider>
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/index';
import Feira from './pages/Feira/index';
import Carrinho from './pages/Carrinho/index';
import { UsuarioProvider } from './common/contexts/Usuario';
import { CarrinhoProvider } from './common/contexts/Carrinho';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">  
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
            <Route path="/carrinho">
              <Carrinho />
            </Route>
          </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;

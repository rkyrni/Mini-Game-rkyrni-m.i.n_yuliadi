import './App.css';
import Landing from './pages/landing/Landing';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ProviderContext} from './state management/StateManagement';
import Layout from './layouts/Layout';
import Games from './pages/games/Games';
import About from './pages/about/About';

const App = () => {
  return (
    <BrowserRouter>
      <ProviderContext>
        <Switch>
          <Route exact path={'/'}>
            <Landing />
          </Route>
          <Route exact path={`/games`}>
            <Layout>
              <Games />
            </Layout>
          </Route>
          <Route exact path={`/about`}>
            <Layout>
              <About />
            </Layout>
          </Route>
        </Switch>
      </ProviderContext>
    </BrowserRouter>
  );
};

export default App;

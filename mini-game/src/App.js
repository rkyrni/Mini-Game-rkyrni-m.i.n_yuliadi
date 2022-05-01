import './App.css';
import Landing from './pages/landing/Landing';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {ProviderContext} from './state management/StateManagement';
// import Layout from './layouts/Layout';
import About from './pages/about/About';
import Footer from './component/Footer';

const App = () => {
  return (
    <BrowserRouter>
      {/* <ProviderContext> */}
      <Switch>
        <Route exact path={'/'}>
          <Landing />
        </Route>
        {/* <Route exact path={`/games`}>
            <Layout></Layout>
          </Route> */}
        <Route exact path={`/about`}>
          {/* <Layout> */}
          <About />
          {/* </Layout> */}
        </Route>
      </Switch>
      {/* </ProviderContext> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;

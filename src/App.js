import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/Registration/SignIn/SignIn';
import SignUp from './pages/Registration/SignUp/SignUp';
import Services from './pages/Services/Services';
import Header from './pages/Shared/Header/Header';
import GeneralRoute from './PrivateRoutes/GeneralRoute/GeneralRoute';
import RegistrationRoute from './PrivateRoutes/RegistrationRoute/RegistrationRoute'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <GeneralRoute path="/services">
              <Services></Services>
            </GeneralRoute>
            <RegistrationRoute path="/signin">
              <SignIn></SignIn>
            </RegistrationRoute>
            <RegistrationRoute path="/signup">
              <SignUp></SignUp>
            </RegistrationRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

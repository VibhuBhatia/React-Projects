import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';



function App() {

  const isauth = useSelector( state => state.auth.isAuthenticated);
  return (
    <Fragment>
    <Header />
    { !isauth && <Auth />}
    { isauth && <UserProfile/> }
    <Counter />
    </Fragment>
  );
}

export default App;

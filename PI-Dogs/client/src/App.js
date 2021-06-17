import './App.css';
import { Route } from 'react-router-dom';
import Form from "./Components/Form";
import PrincipalPage from './Components/PrincipalPage';
import PrincipalRoute from './Components/PrincipalRoute';
import CardDetail from './Components/CardDetail';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={PrincipalPage} />
      <Route exact path='/principal' component={PrincipalRoute} />
      <Route exact path='/principal/form' component={Form} />
      <Route exact path='/principal/:id' render={({match}) => <CardDetail match={match} /> }/>
    </div>
  );
}

export default App;
import './App.css';
import { Route } from 'react-router-dom';
import Form from "./Components/Form";
import PrincipalPage from './Components/PrincipalPage';
import PrincipalRoute from './Components/PrincipalRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={PrincipalPage} />
      <Route exact path='/principal' component={PrincipalRoute} />
      <Route exact path='/principal/form' component={Form} />
    </div>
  );
}

export default App;
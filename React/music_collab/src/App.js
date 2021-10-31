import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //this should be home page
    <div>
        <BrowserRouter>
          <Switch> 
            <Route path="/Profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;

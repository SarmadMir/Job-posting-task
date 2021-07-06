import './App.css';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import the views screen
// UI/UX Section
import Jobs from './views/Jobs'
// API Section
import Api from './API/api'

const hist = createBrowserHistory()

function App() {
  return (
    <Router history={hist}>
      <Route exact path='/' component={Jobs} />
      <Route exact path='/api' component={Api} />
    </Router>
  );
}

export default App;

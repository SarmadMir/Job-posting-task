import './App.css';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import the views screen
import Jobs from './views/Jobs'

const hist = createBrowserHistory()

function App() {
  return (
    <Router history={hist}>
      <Route exact path='/' component={Jobs} />
    </Router>
  );
}

export default App;

import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css';
// import the views screen
// UI/UX Section
import Jobs from './views/Jobs'
// API Section
import Api from './API/api'
// Redux Section
import store from './store'

const hist = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <Route exact path='/' component={Jobs} />
        <Route exact path='/api' component={Api} />
      </Router>
    </Provider>
  );
}

export default App;

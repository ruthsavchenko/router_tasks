import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header'
import Users from './components/Users'
import Posts from './components/Posts'
import UserDetails from './components/UserDetails'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/">
            <h2>Home</h2>
          </Route>
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/posts" component={Posts}></Route>
          <Route exact path="/users/:id" component={UserDetails}></Route>
          <Route exact path="/posts/:id" component={PostDetails}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

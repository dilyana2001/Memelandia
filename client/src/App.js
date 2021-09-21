import { Route, Switch } from 'react-router';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './components/HomePage/HomePage';
import PostDetails from './components/PostDetails/PostDetails';
import CreatePost from './components/CreatePost/CreatePost';
import Footer from './components/Footer/Footer';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/details/:postId' component={PostDetails} />
        <Route path='/create-post' component={CreatePost} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;

import { Route, Switch } from 'react-router';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './components/HomePage/HomePage';
import CreatePost from './components/CreatePost/CreatePost';
import Profile from './components/Profile/Profile';
import PostDetails from './components/PostDetails/PostDetails';
import SharePost from './components/SharePost/SharePost';
import EditPost from './components/EditPost/EditPost';
import DeletePost from './components/DeletePost/DeletePost'
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
        <Route path='/profile' exact component={Profile} />
        <Route path='/create-post' component={CreatePost} />
        <Route path='/details/:postId' component={PostDetails} />
        <Route path='/share-post/:postId' component={SharePost} />
        <Route path='/edit/:postId' exact component={EditPost} />
        <Route path='/delete/:postId' component={DeletePost} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

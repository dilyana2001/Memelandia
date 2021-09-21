import { Route, Switch } from 'react-router';

import Header from './components/Header/Header';
import Login from './components/AuthPages/Login/Login';
import Register from './components/AuthPages/Register/Register';
import HomePage from './components/MainPages/HomePage/HomePage';
import CreatePost from './components/MainPages/CreatePost/CreatePost';
import Profile from './components/MainPages/Profile/Profile';
import PostDetails from './components/MainPages/PostDetails/PostDetails';
import SharePost from './components/Actions/SharePost/SharePost';
import EditPost from './components/MainPages/EditPost/EditPost';
import DeletePost from './components/Actions/DeletePost/DeletePost';
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

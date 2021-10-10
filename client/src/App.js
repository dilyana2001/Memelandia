import { Route, Switch } from 'react-router';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Header from './components/Header/Header';
import Login from './components/AuthPages/Login/Login';
import Register from './components/AuthPages/Register/Register';
import HomePage from './components/MainPages/HomePage/HomePage';
import CreatePost from './components/MainPages/CreatePost/CreatePost';
import Profile from './components/MainPages/Profile/Profile';
import PostDetails from './components/MainPages/PostDetails/PostDetails';
import SharePost from './components/Actions/SharePost/SharePost';
import CommentPost from './components/MainPages/PostDetails/CommentPost/CommentPost';
import EditPost from './components/MainPages/EditPost/EditPost';
import DeletePost from './components/Actions/DeletePost/DeletePost';
import Footer from './components/Footer/Footer';
import EditProfile from './components/MainPages/Profile/EditProfile/EditProfile';

import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>

        <Header />

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profiles/:userId' exact component={Profile} />
          <Route path='/create-post' component={CreatePost} />
          <Route path='/details/:postId' component={PostDetails} />
          <Route path='/share-post/:postId' component={SharePost} />
          <Route path='/comments/:postId' component={CommentPost} />
          <Route path='/edit/:postId' exact component={EditPost} />
          <Route path='/delete/:postId' component={DeletePost} />
          <Route path='/profiles/:userId/edit' component={EditProfile} />

        </Switch>

        <Footer />

      </ErrorBoundary>
    </div>
  );
}

export default App;

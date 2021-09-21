
import { Route, Switch } from 'react-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

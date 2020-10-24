import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar store={props.store}/>
        <div className="content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
  );
}

export default App;

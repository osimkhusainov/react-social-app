import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar store={props.store}/>
        <div className="content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
  );
}

export default App;

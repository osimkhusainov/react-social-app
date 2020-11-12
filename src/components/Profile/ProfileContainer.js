import React from 'react';
import './Profile.scss';
import Profile from './Profile'
import { connect } from 'react-redux';
import { setProfileUsers } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api'


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        usersAPI.getProfile().then(data => {
            this.props.setProfileUsers(data);
        });
    }

    render(){
        return (
            <Profile { ...this.props } profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => {
      return {
          profile: state.profilePages.profile
      }      
}
let urlDataWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setProfileUsers})(urlDataWithRouter);
import React from 'react';
import './Profile.scss';
import * as axios from 'axios';
import Profile from './Profile'
import { connect } from 'react-redux';
import { setProfileUsers } from '../../redux/profile-reducer';



class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfileUsers(response.data);
        });
    }

    render(state){
        return (
            <Profile { ...this.props } profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => {
      return {
          profile: state.profilePages.profile
        // a: 12
      }      
}

export default connect(mapStateToProps, {setProfileUsers})(ProfileContainer);
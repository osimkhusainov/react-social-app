import React from 'react';
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, getUsers, getCurrentPage, toggleFollowingInProgress, getUnfollowProgress, getFollowProgress } from './../../redux/users-reducer';
import './Users.scss';
import Users from './Users';
import Preloader from '../Preloader';

class UsersComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getCurrentPage(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
                {this.props.isFetching ? <Preloader />  : null}
                <Users      onPageChanged={this.onPageChanged}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            followingInProgress={this.props.followingInProgress}
                            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                            getUnfollowProgress={this.props.getUnfollowProgress}
                            getFollowProgress={this.props.getFollowProgress}
                />
            </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingInProgress: state.usersPages.followingInProgress
    }
};


export default connect(mapStateToProps, 
    { followSuccess, unfollowSuccess, toggleFollowingInProgress, getUsers, getCurrentPage, getUnfollowProgress, getFollowProgress})(UsersComponent);

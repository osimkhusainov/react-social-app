import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from './../../redux/users-reducer';
import './Users.scss';
import Users from './Users';
import Preloader from '../Preloader';

class UsersComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
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
        isFetching: state.usersPages.isFetching
    }
};


export default connect(mapStateToProps, 
    { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersComponent);

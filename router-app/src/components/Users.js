import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/Users.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/actions';
import Spinner from './Spinner'

export const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div className="container">
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <Link to={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Users

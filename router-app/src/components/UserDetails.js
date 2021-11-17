import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const { id } = useParams();

    const user = useSelector(state => state.users.find(item => item.id === +id));


    if (!user) {
        return <h2>User not found</h2>
    }

    return (
        <div key={user.id} className="user-details">
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <div className="user-card__address">
                <h4>Address:</h4>
                <p>{user.address.street} street, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                <div>
                    <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
                </div>
            </div>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href="{user.website}">{user.website}</a></p>
            <div className="user-card__company">
                <h4>Company:</h4>
                <p>"{user.company.name}"</p>
                <p>Catch phrase: {user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    );
}

export default UserDetails

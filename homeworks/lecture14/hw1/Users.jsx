import React, { useState } from "react";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import "./App.css";

const Users = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
    <div className="app">
        <h1>User Directory</h1>
        {/* User List */}
        <div className="user-list-container">
        <UserList onSelectUser={(user) => setSelectedUser(user)} />
        </div>

        {/* User Profile */}
        <div className="user-profile-container">
        {selectedUser ? (
            <UserProfile username={selectedUser} />
        ) : (
            <p>Select a user to view their profile</p>
        )}
        </div>
    </div>
    );
}
import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h3>Dashboard</h3>
            </div>
            <div className="sidebar__content">
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/dashboard/users">Users</a>
                    </li>
                    <li>
                        <a href="/dashboard/posts">Posts</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

import React from 'react';
import './style.css';

/*
const user = {
    "createdAt": "2025-04-22T00:19:23.325Z",
    "name": "Fannie Beer MD",
    "avatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/85.jpg",
    "id": "2"
}*/

const ProfileCard = ({setShow, selectUser}) => {

    return (
        <div className="modal">
            <div className="card">
                <img src={selectUser.avatar} alt="" />
                <h1>{selectUser.name}</h1>
                <p>Software Developer</p>
                <button onClick={() => setShow(false)}>Close</button>
            </div>
        </div>

    )
}
export default ProfileCard;
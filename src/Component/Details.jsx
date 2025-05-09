import React, { useEffect, useState } from 'react';
import './style.css';
import ProfileCard from './ProfileCard';


const API_URL = "https://67f0ea81c733555e24ab957e.mockapi.io/api/v1/users";

const Details = () => {

    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState(null);

    const fetchingData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUser(data);
        //console.log(data);
    }

    const handleDelete = (id) => {
        setUser(prev => prev.filter((u) => u.id !== id));
    }


    useEffect(() => {
        fetchingData();
    }, []);


    return (
        <div className="details">
            <div className="content">
                {
                    user.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="3" style={{ fontSize: "25px", background: "skyblue" }}>User Dashboard</th>
                                </tr>
                                <tr>
                                    <th style={{ fontSize: "18px" }}>UserID</th>
                                    <th style={{ fontSize: "18px" }}>Name</th>
                                    <th style={{ fontSize: "18px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((i, index) => (
                                        <tr key={index}>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>
                                                <div className='actions'>
                                                    <button onClick={() => { setSelect(i); setShow(true) }}>View</button>
                                                    <button onClick={() => { handleDelete(i.id) }}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    ) : (
                        <p>Loading......</p>
                    )
                }

                {
                    show && select && (
                        <ProfileCard setShow={setShow} selectUser={select} />
                    )
                }


            </div>
        </div>
    )
}
export default Details;
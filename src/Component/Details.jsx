import React, { useEffect, useState } from 'react';
import './style.css';
import ProfileCard from './ProfileCard';
import axios from "axios";

const API_URL = "https://67f0ea81c733555e24ab957e.mockapi.io/api/v1/users";

const Details = () => {

    const [user, setUser] = useState([]);

    const [show, setShow] = useState(false);
    const [select, setSelect] = useState(null);

    const [error, setError] = useState(null);

    /*
    const fetchingData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUser(data);
        //console.log(data);
    }

    useEffect(() => {
        fetchingData();
    }, []);
    */

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setUser(response.data);
        }).catch((error) => {
            setError(error);
        })
    }, [])

    if (error) return `Error: ${error.message}`;


    const handleView=(userX)=>{
        setSelect(userX); 
        setShow(true);
    }

    const handleDelete = (id) => {
        setUser(prev => prev.filter((u) => u.id !== id));
    }
    
    
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
                                    <th style={{ fontSize: "18px" }}>ID</th>
                                    <th style={{ fontSize: "18px" }}>Name</th>
                                   
                                    <th style={{ fontSize: "18px" }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((i) => (
                                        <tr key={i.id}>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                           
                                            <td>
                                                <div className='actions'>
                                                    <button onClick={() => { handleView(i)}}>View</button>
                                                    <button onClick={() => { handleDelete(i.id) }}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    ) : (
                        <p>Loading.....</p>
                    )
                }

                {
                    show && (
                        <ProfileCard setShow={setShow} selectUser={select} />
                    )
                }
               
            </div>
        </div>
    )
}
export default Details;
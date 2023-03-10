import React from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:4040/getcontacts', { userId: localStorage.getItem('userId') }).then(user => {
            setContacts(user.data.contacts);
        });
    }, [])

    const followers = contacts[0]?.followers;
    const following = contacts[0]?.following;
   // console.log(followers);
   // console.log(following[0]?.name);
    return (
       
        
        <div className="contacts-holder">
            Your Following/Followers
            {following?.map(following => (
                <div className="mb-1 user-block">
                    <div className="d-inline-block p-2">{following.name}</div>


                    <div className="d-inline-block position-absolute end-0 p-2 ping">
                        <button type="button" className="btn green" data-bs-toggle="modal" data-bs-target={"#modal-contacts" + following._id}>
                        <i className="fa-solid fa-eye"></i>
                         </button>
                    </div>

                    <div className="modal fade" id={"modal-contacts" + following._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{following.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    #{following.userType} <br />
                                    User has locked their Email ID <br />
                                    Follow to see their Posts
                                </div>
                                <div className="modal-footer">
                                    <button id={following._id} type="button" className="btn btn-color">Un-Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
           

        
            
        
        )
}

export default Contacts;
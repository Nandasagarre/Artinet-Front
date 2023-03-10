import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Contacts() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:4040/getallartists', { userId: localStorage.getItem('userId') }).then(users => {
            if (users.data.message) {
                setUsers(users.data.users);
            }
        });
    }, [])

    // if user clicks on follow
    const handleFollowClick = (id) => {
        //call follow api and add it to user id
        const userId = localStorage.getItem('userId');
        axios.post('http://localhost:4040/addfollow',
            {
                userId: userId,
                id: id
            }
        ).then(function (response) {
            alert("Cool, Keep Growing your Network...");

        })
            .catch(function (error) {
                alert("Facing lots of traffic, Try after Sometime");
            });
    }



   // console.log(users[0]._id);
    const UserElement = <>
        { users.map(user => (
            
            <div className="mb-1 user-block">
                <div className="d-inline-block p-2">{user.name}</div>
               {/* <div className="d-inline-block position-absolute end-0 p-2">-{user.userType}</div>*/}
               
                <div className="d-inline-block position-absolute end-0 p-2 ping"><button type="button" className="btn btn-color" data-bs-toggle="modal" data-bs-target={"#modal-"+user._id}>
                    <i className="fa-solid fa-eye"></i>
                </button>
                </div> 
              
                <div className="modal fade" id={"modal-" + user._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{user.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                #{user.userType} <br/>
                                User has locked their Email ID <br />
                                Follow to see their Posts
                            </div>
                            <div className="modal-footer">
                                <button id={user._id} onClick={() =>  handleFollowClick(user._id)  } type="button" className="btn btn-color">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        ))
        }
    </>
   // console.log(UserElement);
    return (
        
        <>
            <div className="network-holder">
                All Available Artists/Casters
                {UserElement}
            </div>
        </>
        )
}

export default Contacts;
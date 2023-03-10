import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { Link } from 'react-router-dom';



import Network from './Network';
import Contacts from './Contacts';

function Home(showContacts) {
    const name = localStorage.getItem('name').split('@')[0];
    const [posts, setPosts] = useState([]);
    const isContact = showContacts.showContacts;
    const isNetwork = showContacts.showNetwork;
    console.log(isContact, isNetwork);

    useEffect(() => {
        const userid = localStorage.getItem('userId');
        const uri = `${config.url}/userposts/${userid}`;
        console.log(uri);
        axios.get(uri)
            .then(p => {
                setPosts(p.data.message);
            })
    }, [])
    

    const Posts = <><div>
        {
            posts.map(p => (
                <div key={p.id} id={p.id} className='card-color mb-1 rounded'>
                    <img className="post-profile-img" src="https://picsum.photos/200/300" />
                    <div className="mt-2 postedby">{name}</div>
                    <div className='post-stub'>
                        <div className="text-area"> <p className="desc">{p.desc}</p> </div>
                        <p className="tags">{p.title}</p>
                        {/*  <img className='post-img' src={`${config.url}/${p.imgSrc}`} />*/}
                    </div>
                    <button className='btn btn-light ping m-1'>Ping</button>

                </div>
            ))
        }
    </div></>

   
    return (
        <>
            <div>
                <Link to='/addpost'>
                    <div className='text-center'><button type='submit' className='btn btn-color'>Create Post</button></div>
                </Link> 
            </div>
            <div className='parent'>
                
                {Posts}
                
            </div>
            { isContact ? <Network /> : <></>}
            { isNetwork ? <Contacts /> : <></>}
        </>
    )
}
export default Home;
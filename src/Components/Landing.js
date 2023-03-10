import React from 'react';
import { Link } from 'react-router-dom';
function Landing() {
    
    return (
        //locked
        <>
            <div className='text-center m-2 mt-5'>
                <h3 className='Heading-color'>Welcome to the Artists Network, ArtiNet...</h3>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 stub col-sm-12'>
                        <div className='card shadow-lg p-3 mb-5 rounded card-color'>
                            <div className='card-body'>
                                <h5 className='card-title'>For Artists</h5> <hr/>
                                <p>Build Your Profile</p>
                                <p>Build Your Netwrok</p>
                                <p>Grab that <span className='text-color'><b>DREAM</b></span> oppurtunity</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 stub col-sm-12'>
                        <div className='card shadow-lg p-3 mb-5 rounded card-color'>
                            <div className='card-body'>
                                <h5 className='card-title'>For Casters</h5> <hr/>
                                <p>Looking for <span className='text-color'><b>ARTISTS</b></span>?</p>
                                <p>Search for Artists with a click</p>
                                <p>Talent Aquisition for your Film Made easy</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to='/signin'>
                <div className='text-center'><button className='shadow p-3 mb-5 btn btn-color'>Sign UP Now</button></div>
                
            </Link>
        </>
        )
}

export default Landing;
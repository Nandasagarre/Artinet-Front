import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Login() {
    const [formdata, setFormData] = useState({
        email: '',
        pwd: ''
    });
    const handleChange = function (event) {
        setFormData((p) => {
            return {
                ...p,
                [event.target.name]: event.target.value
            }
        })
        console.log(formdata);
    }

    const handleSubmit = async function (e) {
        e.preventDefault();
        //console.log('prevented', formdata);

        await axios.post("http://localhost:4040/login", formdata).then((res) => {
            console.log(res);
            if (res.data.message === "User Logged in") {
                console.log('set', res.data.userId);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('name', res.data.name);
                alert(res.data.message);
                window.location.replace('/home');
            }
            else {
                alert(res.data.message);
            }
           // console.log('get', localStorage.getItem('userId'));
            

        }).catch((err) => {
            console.log(err);
            alert('Try after sometime');

        });
        const form = document.forms['signup'];
        form.reset();


    }

    return (
        <>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='card card-color'>
                        <form className='m-1' id='signup' onSubmit={(e) => { handleSubmit(e) }}>
                           
                            <div className="mb-3 p-2">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="Email" name='email' onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="mb-3 p-2">
                                <label htmlFor="pwd" className="form-label">Password</label>
                                <input type="password" className="form-control" id="pwd" name='pwd' required onChange={(e) => handleChange(e)} />
                            </div>
                            <div className='text-center'><button type='submit' className='btn btn-color'>Log In</button></div>

                        </form>
                    </div>
                </div>
        </>
    )
}

export default Login;
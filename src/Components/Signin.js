import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



function SignIn() {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        userType: '',
        pwd:''
    });

   
  
    const handleSubmit = async function (e) {
        e.preventDefault();
        console.log('prevented', formdata);

        await axios.post('http://localhost:4040/signin', formdata).then((res) => {
            console.log(res);
            alert(res.data.message);
            
        }).catch((err) => {
            console.log(err);
            alert(err);
            
        });
        const form = document.forms['signup'];
        form.reset();
        
       
    }

    const handleChange = function (event) {       
        setFormData((p) => {
            return {
                ...p,
                [event.target.name] : event.target.value
                }
        })
        console.log(formdata);
    }

   

    return (
        <>
          
            <div className='d-flex justify-content-center mt-3'>
                <div className='card card-color'>
                    <form className='m-1' id='signup' onSubmit={(e) => { handleSubmit(e) } }>
                        <div className="mb-3 p-2">
                            <label htmlFor="username" className="form-label">Name</label>
                            <input type="text" className="form-control" id="username" name='name' onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mb-3 p-2">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="Email" name='email' onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="mb-3 p-2">
                            <label htmlFor="userType" className="form-label">You are ...</label>
                            <select type="text" className="form-control" id="userType" name='userType' required onChange={(e) => handleChange(e)}>
                                <option value="">Please Select</option>
                                <option value="artist">Artist</option>
                                <option value="cast">Casting Director</option>
                            </select>
                        </div>

                        <div className="mb-3 p-2">
                            <label htmlFor="pwd" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pwd" name='pwd' required onChange={(e) => handleChange(e)}  />
                        </div>
                        <div className='text-center'><button type='submit'  className='btn btn-color'>Take Me In</button></div>
                        
                    </form>
                </div>
            </div>
           
           
        </>
        )
}

export default SignIn;
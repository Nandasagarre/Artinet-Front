import React from 'react';
import { useState} from 'react';
import axios from 'axios';

function AddPost() {
    const userId = localStorage.getItem('userId');

    const [formdata, setFormData] = useState({
        Postedby: userId,
        title: '',
        desc: '',
        imgSrc: ''
    });
    
    const handleSubmit = async function (e) {
        e.preventDefault();
        //console.log('prevented', formdata);

        await axios.post("http://localhost:4040/addpost", formdata).then((res) => {
            console.log(res);
            alert(res.data.message);
            window.location.replace('/home');

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
                [event.target.name]: event.target.value
            }
        })
        console.log(formdata);
    }

    return (
        
        <>
            <div className='d-flex justify-content-center mt-3'>
                <div className='card card-color'>
                    <form className='m-1' id='signup' onSubmit={(e) => { handleSubmit(e) }}>
                        <input type="hidden" name="Postedby" value={userId} />

                        <div className="mb-3 p-2">
                            <label htmlFor="title" className="form-label">#Tagg Anything</label>
                            <input type="text" className="form-control" id="title" name='title' onChange={(e) => handleChange(e)} />
                        </div>

                        <div class="mb-3 p-2 form-group">
                            <label for="desc">what's up?</label>
                            <textarea class="form-control" id="desc" rows="3" maxlength="500" name='desc' onChange={(e) => handleChange(e)}></textarea>
                        </div>

                        {/*<div className="mb-3 p-2">*/}
                        {/*    <label htmlFor="imgSrc" className="form-label">Image</label>*/}
                        {/*    <input type="file" accept="image/png, image/jpeg" className="form-control" id="imgSrc" name='imgSrc' onChange={(e) => handleChange(e)} />*/}
                        {/*</div>*/}

                      
                        <div className='text-center'><button type='submit' className='btn btn-color'>Create Post</button></div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddPost;
import React from 'react';


function Nav({ isVerfied, setCallback, setContactcallback }) {
   // console.log(setCallback, setContactcallback);
    

    const Element = isVerfied ? <><div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 me-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={() => setCallback() }>Network</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => setContactcallback()}>Contacts</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/messages">Messages</a>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    </div></> : <>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 me-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/signin">Sign Up</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    </div></>
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark NavColor">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ArtiNet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {Element}
                    
                </div>
            </nav>
        </>
    )
}

export default Nav;
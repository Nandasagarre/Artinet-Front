import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';
import { useState } from 'react';


import Nav from './Components/Nav';
import Landing from './Components/Landing'
import SignIn from './Components/Signin';
import Login from './Components/Login';
import AddPost from './Components/AddPost';
import Home from './Components/Home';



function App() {
    console.log(localStorage.getItem('userId'));
    const [showContacts, setShowContacts] = useState(false);
    const [showNetwork, setShowNetwork] = useState(false);

    let setCallback = () => {
        // for shwoing the network
        setShowContacts(!showContacts);
      
    }

    let setContactcallback = () => {
        //to set the contacs 
        setShowNetwork(!showNetwork);
       
        
    }

  return (
      <>

          <Nav isVerfied={localStorage.getItem('userId') === null ? false : true} setCallback={setCallback} setContactcallback={setContactcallback } />
          <Router>
              <Routes>
                  
                  <Route exact path='/' element={< Landing />}></Route>
                  <Route exact path='/signin' element={< SignIn />}></Route>
                  <Route exact path='/login' element={< Login />}></Route>
                  <Route exact path='/addpost' element={< AddPost />}></Route>
                  <Route exact path='/home' element={< Home showContacts={showContacts} showNetwork={showNetwork} />}></Route> 
              </Routes>
          </Router>
   </>
  );
}

export default App;

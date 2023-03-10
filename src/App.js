import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';
//import { createBrowserHistory } from "history";
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
   // const history = createBrowserHistory({ basename: '/Artinet-Front' });
  return (
      <>

          <Nav isVerfied={localStorage.getItem('userId') === null ? false : true} setCallback={setCallback} setContactcallback={setContactcallback } />
          <Router>
              <Routes>
                  
                  <Route exact path='Artinet-Front/' element={< Landing />}></Route>
                  <Route exact path='Artinet-Front/signin' element={< SignIn />}></Route>
                  <Route exact path='Artinet-Front/login' element={< Login />}></Route>
                  <Route exact path='Artinet-Front/addpost' element={< AddPost />}></Route>
                  <Route exact path='Artinet-Front/home' element={< Home showContacts={showContacts} showNetwork={showNetwork} />}></Route> 
              </Routes>
          </Router>
   </>
  );
}

export default App;

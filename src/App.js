import './App.css';
import React, {useEffect, useState} from 'react'
import Login from './Login.js'
import { getTokenFromUrl } from './Spotify';

function App() {
  const [token, setToken] = useState(null)

  //Run coe based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash=""
    const _token=hash.access_token

    //if token exist, set token state to be token
    if(_token){
      setToken(_token)
    }
  }, []);




  return (

   <div className="app">

     {
     token ?  <h1>logged in</h1> : <Login/>
     }
 
   </div>
  );
}

export default App;

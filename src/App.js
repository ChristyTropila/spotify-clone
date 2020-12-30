import './App.css';
import React, {useEffect, useState} from 'react'
import Login from './Login.js'
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player.js'
import { useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi()


function App() {
  const [token, setToken] = useState(null)
  const [{}, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash=""
    const _token=hash.access_token

    //if token exist, set token state to be token
    if(_token){
      setToken(_token)

      dispatch({
        type: 'SET_USER',
        user: user
      })

      //gives access token to spotify api
      spotify.setAccessToken(_token)

      //gets users account, returns a promise
      spotify.getMe().then(user => {
        console.log(user)
      })
    }
  }, []);




  return (

   <div className="app">

     {
     token ? <Player/> : <Login/>
     }
 
   </div>
  );
}

export default App;

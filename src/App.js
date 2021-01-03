import './App.css';
import React, {useEffect, useState} from 'react'
import Login from './Login.js'
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player.js'
import { useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi()


function App() {
 // const [token, setToken] = useState(null)
  const [{user, token}, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash=""
    const _token=hash.access_token

    //if token exist, set token state to be token
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,

      })

      //gives access token to spotify api
      spotify.setAccessToken(_token)

      //gets users account, returns a promise
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
  }, []);


  return (

   <div className="app">

     {
     token ? <Player spotify={spotify} /> : <Login/>
     }
 
   </div>
  );
}

export default App;

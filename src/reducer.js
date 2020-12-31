export const initialState =  {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //remove after developing chaange to null
    token: "BQDPGyABqpjawP5pOQ6tACpURWp5AlKQiF0-SoGl4vxfF_XSDS…1ahKzsjnJ_aR8QJ-HkPVIPZI8FwDXq6e-kRuFEnO-MRT6KDFs"
}


const reducer = (state, action) => {
 console.log(action)


 switch(action.type){
   case 'SET_USER':
       return {
           ...state,
           user: action.user
   }
   case 'SET_TOKEN':
       return {
           ...state,
           token: action.token
       }
   default: 
        return state;
 }
}

export default reducer
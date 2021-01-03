export const initialState =  {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDtPahF7zJaep2zVtuf0v4y8UbZTdsvegwcb1T6lP48FGM4RS…xfTbkM4vLVH6UwdOF8lpD9gC4NPtM7OSyM0LVk3l70_JCbclk"
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

    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists
        }  

   default: 
        return state;
 }
}

export default reducer
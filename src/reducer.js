export const initialState = {
    user: null,
    playlists: [],
    playing:false,
    item:null,
    // Remove after finished developing....
//    token:'BQBmRDkiy5ehc2eLjNxtLdn4psaKJlfi_ai5O6XMQnvUcSDUTvJiKlOm0j8dCLmPV2_QSykit56q3yRLZ5DvvsvdUG-Afn525N-pcrVdNBRdxygM-z2n7j4BOvoKYQ-_Dz0tFAMaGKbrTz7l2IotDNZ6dE4Rh8VnlD8cmk1-gfastwQWx2tqdyhY5ko88S8QZabYbwboqUT7H14m3Y7Y',
};
const reducer = (state, action) => {
console.log(action);

switch(action.type){
    case 'SET_USER':
    return{
        ...state,
        user : action.user,
    }
    case "SET_TOKEN":
        return{

            ...state,
            token: action.token,
        }

        case "SETPLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,    
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }

    default:
        return state;                                                                                               
}
}
export default reducer;
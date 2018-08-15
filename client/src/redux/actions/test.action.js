import axios from 'axios';
import { FETCH_STUFF } from "./action.types";


  export const listUsers = () => dispatch => {
    console.log('HERE 1');
      axios.get(`http://localhost:5000/api/hello`)
        .then(response => {
          console.log('RESPONSE=',response);
          dispatch({type: FETCH_STUFF, payload: response});
        })
        .catch(err => {
          console.log(err);
        //   dispatch({type: FETCH_STUFF_ERROR});
        })
  }
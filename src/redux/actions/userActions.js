import * as ActionTypes from '../actionTypes';
import { Users } from '../../shared/user';

export const addUsers = (users) => ({
  type: ActionTypes.ADD_USERS,
  payload: users
});



export const fetchtUsers = () => (dispatch) => {

  //dispatch(addUsers(Users));

  // setTimeout(() => {
  //     //dispatiching addDishes action fucntion here isntead in mainComp
  //     dispatch(addDishes(DISHES));
  // }, 2000);




  return fetch('http://192.168.0.107:3000/users/getData')    //--------------start step 3.2 fetch----------------
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText); //error is dishes nt found
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);  //error if we face problem to connect server
        throw errmess;
      })
    .then((res) => res.json() )
    .then(data =>  console.log(data))
    .catch(error => console.log(error)); //end 0f step 3.2 fetcg----------
}
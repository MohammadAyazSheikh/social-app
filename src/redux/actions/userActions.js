import * as ActionTypes from '../actionTypes';


//*************************************************************  SignUp **************************************/

export const signUpSucces = (userInfo) => ({
  type: ActionTypes.SIGNUP_SUCCES,
  payload: userInfo
});

export const signUpFailed = (err) => ({
  type: ActionTypes.SIGNUP_FAILED,
  payload: err
});

export const signUpLoading = () => ({
  type: ActionTypes.SIGNUP_LOADING,
});



export const Register = (Fname, Lname, email, pass, dob) => (dispatch) => {

  const userData = {
    Fname: Fname,
    Lname: Lname,
    username: email,
    password: pass,
    dob: dob
  }
  console.log(JSON.stringify(userData));
  dispatch(signUpLoading());


  return fetch('http://192.168.0.107:3000/users/signup',
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }
  )
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText); //erro if user not found etc
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);  //error if we face problem to connect server
        throw errmess;
      })
    .then((res) => res.json())
    .then(
      data => {
        //console.log("\n***response**\n\n"+data)
        dispatch(signUpSucces(data))
        //setTimeout(() =>dispatch(signUpSucces(data)),3000) 
      }
    )
    .catch(
      error => {
        console.log('post Signup consolog Error', error.message);
        alert('Your signup req could not be posted\nError: ' + error.message);
        dispatch(signUpFailed(error.message))
      }
    );
}







// export const fetchtUsers = () => (dispatch) => {

//   //dispatch(addUsers(Users));

//   // setTimeout(() => {
//   //     //dispatiching addDishes action fucntion here isntead in mainComp
//   //     dispatch(addDishes(DISHES));
//   // }, 2000);




//   return fetch('http://192.168.0.107:3000/users/getData')    //--------------start step 3.2 fetch----------------
//     .then(response => {
//       if (response.ok) {
//         return response;
//       }
//       else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText); //error is dishes nt found
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         var errmess = new Error(error.message);  //error if we face problem to connect server
//         throw errmess;
//       })
//     .then((res) => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error)); //end 0f step 3.2 fetcg----------
// }
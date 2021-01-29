import * as ActionTypes from '../actionTypes';



export const searchSuccess = (users) => ({
  type: ActionTypes.SEARCH_SUCCESS,
  payload: users
});

export const searchFailed = (err) => ({
  type: ActionTypes.SEARCH_FAILED,
  payload: err
});

export const searchLoading = () => ({
  type: ActionTypes.SEARCH_FAILED,
});



export const searchAction = (uname, token) => (dispatch) => {

  const userData = {
    uname: uname,
    token: token
  }
  console.log(JSON.stringify(userData));

  dispatch(searchLoading());

  //   setTimeout(()=>{dispatch(searchSuccess(Users))},3000)

  return fetch('http://192.168.0.108:3000/users',
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
        dispatch(searchSuccess(data))
        //setTimeout(() =>dispatch(signUpSucces(data)),3000) 
      }
    )
    .catch(
      error => {
        console.log('post Signup consolog Error', error.message);
        alert('Search Error\nError: ' + error.message);
        dispatch(searchFailed("error in searching"));
      }
    );
}


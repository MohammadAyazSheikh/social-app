import * as ActionTypes from '../actionTypes';



export const followSendSuccess = (users) => ({
  type: ActionTypes.FOLLOW_SEND_REQ_SUCCESS,
  payload: users
});

export const followSendFailed = (err) => ({
  type: ActionTypes.FOLLOW_SEND_REQ_FAILED,
  payload: err
});

export const followSendLoading = () => ({
  type: ActionTypes.FOLLOW_SEND_REQ_LOADING,
});




export const followSendAction = (uId, token) => (dispatch) => {

  const Data = {
    toId: uId,
  }
  console.log("****follow actions Data***\n" + JSON.stringify(Data));

  dispatch(followSendLoading());



  return fetch('http://192.168.0.107:3000/notifications',
    {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
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
        dispatch(followSendSuccess(data))
        //setTimeout(() =>dispatch(signUpSucces(data)),3000) 
      }
    )
    .catch(
      error => {
        console.log('send req faild', error.message);
        alert('Error in sending req\n: ' + error.message);
        dispatch(followSendFailed("error in sending follow request"));
      }
    );
}

/************************************************************************************************************* */ 



export const getSentReqSuccess = (reqst) => ({
  type: ActionTypes.GET_SENT_REQ_SUCCESS,
  payload: reqst
});

export const getSentReqFailed = (err) => ({
  type: ActionTypes.GET_SENT_REQ_FAILED,
  payload: err
});

export const getSentReqLoading = () => ({
  type: ActionTypes.GET_SENT_REQ_LOADING,
});

// export const AddSentReq = (reqst) => ({
//   type: ActionTypes.AddSentReq,
//   payload: reqst
// });


export const getSentReqAction = (token) => (dispatch) => {


  dispatch(getSentReqLoading());



  return fetch('http://192.168.0.107:3000/notifications?sent=true',
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
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
        dispatch(getSentReqSuccess(data))
      }
    )
    .catch(
      error => {
        console.log('send req faild', error.message);
        alert('Error in sending req\n: ' + error.message);
        dispatch(getSentReqFailed("error in sending follow request"));
      }
    );
}


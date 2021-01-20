import * as ActionTypes from '../actionTypes';


export const logOutSucces = (userInfo) => ({
    type: ActionTypes.LOGOUT_SUCCES,
    payload: userInfo
});

export const logOutFailed = (err) => ({
    type: ActionTypes.LOGOUT_FAILED,
    payload: err
});

export const logOutLoading = () => ({
    type: ActionTypes.LOGOUT_LOADING,
});


export const LogOut = () => (dispatch) => {

    return fetch('http://192.168.0.107:3000/users/login')    //--------------start step 3.2 fetch----------------
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
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error)); //end 0f step 3.2 fetcg----------
}
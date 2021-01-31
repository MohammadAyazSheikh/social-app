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


export const LogOut = (token) => (dispatch) => {

    console.log("***********************" + token)
    dispatch(logOutLoading());

    return fetch('http://192.168.0.107:3000/users/logout',
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
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((res) => res.json())
        .then(data => dispatch(logOutSucces(data)))
        .catch(error => {
            console.log(error);
            alert(error.message);
            dispatch(logOutFailed());
        });
}
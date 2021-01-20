import * as ActionTypes from '../actionTypes';

export const LogInSucces = (userInfo) => ({
    type: ActionTypes.LOGIN_SUCCES,
    payload: userInfo
});

export const logInFailed = (err) => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: err
});

export const LogInLoading = () => ({
    type: ActionTypes.LOGIN_LOADING,
});

export const Login = (email, pass) => (dispatch) => {

    const userData = {
        username: email,
        password: pass,
    }

    console.log(JSON.stringify(userData));
    dispatch(LogInLoading());


    return fetch('http://192.168.0.107:3000/users/login',
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
        .then(
            data => {
                dispatch(LogInSucces(data))
            }
        )
        .catch(
            error => {
                console.log('post LogIn consolog Error', error.message);
                alert('Your LogIn req could not be posted\nError: ' + error.message);
                dispatch(logInFailed(error.message))
            }
        );
}
import React, { useState } from "react";
import { axiosWithAuth} from './axiosWithAuth';


const Login = (props) => {

    const [login, setLogin] = useState({
        username: '',
        password: ""
    });

    const changeHandler = e => {
        setLogin({ ...login,[e.target.name]: e.target.value  });
    };

    const theLogin = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("https://water-my-plants-build-week-123.herokuapp.com/api/auth/login", login)
        // .then(res => console.log(res))
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            props.history.push("/profile");
        })
        .catch(err => console.log(err, "error login"))
    };

    return (
        <div>
            <form onSubmit={theLogin} >
                <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={changeHandler}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={changeHandler}
                    placeholder="Password"
                />
                <button>Log In</button>
            </form>
        </div>
    )
};

export default Login;
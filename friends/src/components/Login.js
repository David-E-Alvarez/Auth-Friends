import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    // const [login, setLogin] = useState(false);

    const handleChange = e => {
        console.log(e.target.value);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
      
    }


    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     if(token){
    //         setLogin(true)
    //     }
    // }, [])

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", credentials)
            .then(res => {
                console.log("res.data.token: ", res.data.payload);
                console.log("res: ", res)
                localStorage.setItem('token', res.data.payload);
                // if(token){
                //     setLogin(true);
                // }
                props.history.push('/friends-list');
              })
              .catch(err => console.log(err.response));
       
    }

    return(
        <div>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label for="Username"/>
                    <Input type="username"
                        name="username" 
                        value={credentials.username}
                        id="Username" 
                        placeholder="enter username" 
                        onChange={handleChange}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="password"/>
                    <Input type="password" 
                        name="password"
                        value={credentials.password}
                        id="password" 
                        placeholder="enter password"
                        onChange={handleChange}
                        />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </div>
    );
}

export default Login;
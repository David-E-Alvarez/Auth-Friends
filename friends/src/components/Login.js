import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        console.log(e.target.value);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", credentials)
            .then(res => {
                console.log("res.data.token: ", res.data.payload);
                console.log("res: ", res)
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends-list');
              })
              .catch(err => console.log(err.response));
        setCredentials({
            username: "",
            password: ""
        })
    }

    return(
        <div>
            <h1>Form will go here(Login.js)</h1>
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
import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const FriendsList = () => {
    const[friends, setData] = useState([]);
    const[friendsForm, setFriendsForm] = useState({
        name: "",
        age: "",
        email: ""
    });

    useEffect(() => {
        getData()
    },[])
    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('res.data', res.data);
                setData(res.data)
            })
    }

    const submit = () => {
        axiosWithAuth()
            .post(`/api/friends`, friendsForm)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
        setFriendsForm({
            name: "",
            age: "",
            email: ""
        })
    }

    const handleChange = e => {
        setFriendsForm({
            ...friendsForm,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            {
                friends.map(friend => {
                    return(
                        <>
                        <h2>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        </>
                    );
                })
            }
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="name"
                    value={friends.name}
                    onChange={handleChange}
                    placeholder="enter name"
                />
                <input
                    type="text"
                    name="age"
                    value={friends.age}
                    onChange={handleChange}
                    placeholder="enter age"
                />
                <input
                    type="text"
                    name="email"
                    value={friends.email}
                    onChange={handleChange}
                    placeholder="enter email"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default FriendsList;
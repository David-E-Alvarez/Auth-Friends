import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const FriendsList = () => {
    const[friends, setResData] = useState([]);

    useEffect(() => {
        getData()
    })
    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('res', res);
                setResData(res.data)
            })
    }
    return(
        <div>
            <h1>FriendsList.js</h1>
            {
                friends.map(friend => {
                    return(
                    <h2>{friend.name}</h2>
                    );
                })
            }
        </div>
    );
}
export default FriendsList;
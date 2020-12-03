import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    // alert(id);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        // console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        // const result = await axios.get("http://localhost:3003/users/" + id);
        const result = await axios.get(`http://localhost:3003/users/${id}`);

        // console.log(result);
        setUser(result.data);
    };

    return (
        <>

        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
            <div class="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Enter Your name" name="name" value={name} onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Enter Your  username" name="username" value={username} onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Enter Your emil Adress" name="email" value={email} onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={e => onInputChange(e)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Enter Your website" name="website" value={website} onChange={e => onInputChange(e)} />
            </div>
            <button type="submit" className="btn btn-warning btn-block">Update User</button>
        </form>
            </div>
        </div>
        </>
    );
};

export default EditUser;
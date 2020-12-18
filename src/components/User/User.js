import React, { useState } from 'react';

const User = (props) => {
    const {name, email, picture, phone, registered} = props.user;
    const addMember = props.addMember;
    const fullName = name.first + ' ' + name.last;
    
    const [mobile, setMobile] = useState('')
    const [herAge, setHerAge] = useState()
   
    const handleAge = () => setHerAge(registered.age)
    const handlePhone = () => setMobile(phone);
    
    const userStyle ={
        border: '2px solid red',
        marginTop:'5px',
        padding:'5px',
        display: 'flex',
        width: '500px',
        textAlign:'center'
    }
    return (
        <div style={userStyle}>
            <div>
                <img src={picture.large} alt=""/>
            </div>
            <div style={{paddingLeft: '10px',marginBottom: '10px'}} >
                <h2>Name: {fullName}</h2>
                <p>Email: {email}</p>
                <p>Learn About me</p>
                <p>Age: {herAge}</p>
                <button onClick={handleAge} >Show Age</button>

                <p>Phone Number: {mobile}</p>
                <button onClick={handlePhone} >Show Phone Number</button>
                <br/><br/>
                <button onClick={() => addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
};

export default User;
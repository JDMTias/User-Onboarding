import React, {useState} from 'react'

export default function MemberForm (props) {
    // deconstruct props so you can have access to them here, these are the purple words in memberform that you pass in.
    const {value, onSubmitHandler, onInputChange, data, errorMessage, disabled,onCheckboxChange} = props;
    return (
        // 1 and 1a
        <form onSubmit={onSubmitHandler}>
            <div>
                <h2>User Sign up</h2>
            </div>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Your Name"
                    maxLength="25"
                    name="personName"
                    // value=''
                    onChange={onInputChange}
                />
                {/* 2g */}
                <div>{errorMessage.personName}</div>
                <label>Email: </label>
                <input
                    type="text"
                    placeholder="Email123@email.com"
                    maxLength="25"
                    name="email"
                    // value=''
                    onChange={onInputChange}
                />
                  {/* 2g */}
                  <div>{errorMessage.email}</div>
                <label>Password: </label>
                <input
                    type="text"
                    placeholder="Password123!"
                    maxLength="10"
                    name="password"
                    // value=''
                    onChange={onInputChange}
                />
                  {/* 2g */}
                  <div>{errorMessage.password}</div>
                <label>Terms of Service
                <input 
                    name="tos"
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={value.tos}
                />
                </label>
                  {/* 2g */}
                  <div>{errorMessage.checkbox}</div>
                <button disabled={disabled}type='submit'>Login</button>
                {/* This is just putting the data response onto the screen to make sure that it is working */}
                {/* <pre>{JSON.stringify(data)}</pre> */}
        </form>
    )
}
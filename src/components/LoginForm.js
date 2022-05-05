import React from 'react'

export default function LoginForm(props) {
    return (
        <form>
            <div>
                <label>Username</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <button onClick={props.hi}>Login</button>
            </div>
        </form>

    )
}

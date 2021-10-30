import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="border border-dark col-xl-3 mx-auto text-center p-3 my-3">
                <h3 className="mb-4 fst-italic">Login Form</h3>

                <form>
                    <div>
                        <input className="form-control" type="text" placeholder="User name" autocomplete="new" /><br />
                        <input className="form-control" type="password" placeholder="Password" autocomplete="new" /><br />
                    </div>
                    <button onClick="" className="btn btn-primary">Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login

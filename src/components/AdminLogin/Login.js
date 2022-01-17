import React from 'react'

function Login() {
    const [user,setUser]=useState({
        name:'',
        password:'',
    })
    function updateForm(value) {
        return setUser((prev) => {
            return { ...prev, ...value };
        });
    }
 
    return (
        <div>
            <h1>Admin Login</h1>
            <label>EMAIL</label>
            <input type='email'></input>
        </div>
    )
}

export default Login

import React,{useState} from 'react'


function Login() {
    const [userlist,setList]=useState([]);
    const [user,setUser]=useState({
        email:'',
        password:'',
    });
    function updateForm(value) {
        return setUser((prev) => {
            return { ...prev, ...value };
        });
    }
 
    async function onSubmit(e){
       // e.preventDefault();
       const response = await fetch(`http://localhost:5000/login/`);
       if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const users = await response.json();
      alert(users);
        setUser({email:'',password:''});
        setList(userlist);
    }

    return (
        <div style={{padding:'30px'}}>
            <h1>Admin Login</h1>
            <form onSubmit={onSubmit}>
            <label>EMAIL</label>
            <input 
            className="form-control"
            type='text' 
            placeholder="Email"
            onChange={(e)=>updateForm({email: e.target.value})}
            />

            <label>Password</label>
            <input
            className='form-control'
            type='password'
            placeholder='Password'
            onChange={(e)=>updateForm({password: e.target.value})}
            />

            <div className="form-group">
            <input
            type="submit"
            value="Login"
            className="btn btn-primary"
            />
            </div>

            <div>
                {
                    userlist.map((rec)=>{
                        return(
                            <><thead>
                                <tr>
                                    <td>email</td>
                                    <td>password</td>
                                </tr>
                            </thead><tbody>
                                    <tr key={rec._id}>
                                        <td>{rec.email}</td>
                                        <td>{rec.password}</td>
                                    </tr>
                                </tbody></>
                            
                        )
                    })
                }
            </div>
            </form>
        </div>
        
    )
}

export default Login

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const userLogin = (e) => {
        if (username === 'username' && password === 'password') {
            localStorage.setItem('loggedin', true);
            navigate(-1);
        }
        e.preventDefault();
    };

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={userLogin}>
                <div>
                <label> 
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                </div>
                <div>
                <label> 
                    Password:
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;
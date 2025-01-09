import { Link, useNavigate } from "react-router-dom";

function Home() {
    const loggedin = localStorage.getItem('loggedin');
    const navigate = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/');
    };

    return (
        <div>
            <h1>Home</h1>
            {
                loggedin 
                ? 
                (
                <div>
                    <div>Logged in user</div>
                    <button onClick={userlogout}>Log out</button>
                </div>
                ) 
                : 
                <Link to="/login">Login</Link>
            }
        </div>
    )
}

export default Home;
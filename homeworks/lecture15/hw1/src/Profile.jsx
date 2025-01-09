import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./Profile.css"

function Profile() {
    const { name } = useParams();
    const [user, setUser] = useState({});
    const url = 'https://api.github.com/users/' + name;
  
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((res) => {
            setUser(res);
         });
    }, []);

    return (
        <>
          <div className='userProfile'>
            <div className='userAvator'>
                <img src={user.avatar_url} />
            </div>
            <div className='userDetails'>
              <h1 className='userName'>{user.login}</h1>
              <div className='userRepo'>
                  <div>Repositories:</div>
                  <ul>
                    <li><a href={user.url}>Repo</a></li>
                    <li><a href={user.following_url}>Following</a></li>
                    <li><a href={user.followers_url}>Followers</a></li>
                    <li><a href={user.organizations_url}>Organizations</a></li>
                    <li><a href={user.subscriptions_url}>Subscriptions</a></li>
                  </ul>
              </div>
            </div>
            <Link to="/users">Back to all users</Link>
          </div>
        </>
    )
}

export default Profile;
import './Profile.css'

function Profile(props) {
    const user = props.user;
    return (
        <div className='userProfile'>
            <div className='userAvator'>
                <img src={user.avatar_url} />
            </div>
            <div className='userDetails'>
                <div className='userName'>{user.login}</div>
                <div className='userRepo'>
                    <div>Repositories</div>
                    <ul>
                        <li><a href={user.url}>Repo</a></li>
                        <li><a href={user.following_url}>Following</a></li>
                        <li><a href={user.followers_url}>Followers</a></li>
                        <li><a href={user.organizations_url}>Organizations</a></li>
                        <li><a href={user.subscriptions_url}>Subscriptions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;
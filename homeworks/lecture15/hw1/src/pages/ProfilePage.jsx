import {useState, useEffect, useMemo} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const frame = {
  margin: 'auto',
  display: 'flex',
  width: 600,
  padding: 20,
  borderRadius: 10,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
};

const profilePhoto = {
  maxWidth: '100%',
  borderRadius: '50%',
  width: 200,
  height: 200,
  objectFit: 'cover',
};

const textBox = {
  flex: 1,
  marginLeft: 30,
};

export default function ProfilePage() {
  const user = useMemo(() => localStorage.getItem('user'), []);
  const navigate = useNavigate();

  const [repos, setRepos] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {login} = useParams();
  const profile_url = `https://api.github.com/users/${login}`;
  const repos_url = `https://api.github.com/users/${login}/repos`;

  useEffect(() => {
    if (!user) navigate('/login', {state: {from: `/users/${login}`}});
  }, [login, navigate, user]);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetch(profile_url), fetch(repos_url)])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((d) => {
        console.log(d);
        setProfile(d[0]);
        setRepos(d[1]);
      })
      .catch((err) => {
        setError(err);
      });
    setIsLoading(false);
  }, [repos_url, profile_url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {repos && profile && (
        <div style={frame}>
          <div>
            <img src={profile?.avatar_url} style={profilePhoto}></img>
          </div>
          <div style={textBox}>
            <p>
              <b>{profile?.name}</b>
            </p>
            <p>Location: {profile?.location}</p>
            <p>Repository:</p>
            <ul>
              {repos.slice(0, 3).map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url}>
                    <p>{repo.name}</p>
                  </a>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

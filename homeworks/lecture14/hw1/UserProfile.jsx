import React, { useEffect, useState } from "react";

const UserProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const profileData = await profileResponse.json();
        setProfile(profileData);

        const reposResponse = await fetch(profileData.repos_url);
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) return <p>Loading profile...</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div className="user-profile">
      <img src={profile.avatar_url} alt={profile.login} className="avatar" />
      <h2>{profile.name || profile.login}</h2>
      <p>Location: {profile.location || "Not available"}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.slice(0, 5).map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;

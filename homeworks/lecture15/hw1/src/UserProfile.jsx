import React, { useEffect, useState } from "react";

const UserProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setProfile(data); // Save the user's profile data
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchUserProfile(); // Fetch only if username exists
  }, [username]);

  if (loading) return <p>Loading user profile...</p>;
  if (!profile) return <p>No profile information available.</p>;

  return (
    <div className="user-profile">
      <img src={profile.avatar_url} alt={profile.login} className="avatar" />
      <h2>{profile.name || profile.login}</h2>
      <p>Location: {profile.location || "Not available"}</p>
      <h3>Repositories:</h3>
      <ul>
        {profile.public_repos > 0 ? (
          <li>Repositories Count: {profile.public_repos}</li>
        ) : (
          <li>No repositories found</li>
        )}
      </ul>
    </div>
  );
};

export default UserProfile;

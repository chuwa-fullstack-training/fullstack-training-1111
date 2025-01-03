const UserListItem = ({ user, setDisplayUser }) => {
    return (
      <div
        className="userListItem"
        onClick={() => {
          setDisplayUser(user.login);
        }}
      >
        <span>{user.id}</span>
        <span>{user.login}</span>
        <img src={user.avatar_url} style={{ maxWidth: "50px", margin: "auto" }} />
      </div>
    );
  };
  
export default UserListItem;
  
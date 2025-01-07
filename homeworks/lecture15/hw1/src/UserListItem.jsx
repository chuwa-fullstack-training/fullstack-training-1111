import { useNavigate } from "react-router-dom";

const UserListItem = ({ user }) => {
  const navigate = useNavigate();
  const { id, login, avatar_url } = user;

  return (
    <div
      className="userListItem"
      onClick={() => {
        navigate(`/${login}`);
      }}
    >
      <span>{id}</span>
      <span>{login}</span>
      <img src={avatar_url} style={{ maxWidth: "50px", margin: "auto" }} />
    </div>
  );
};

export default UserListItem;

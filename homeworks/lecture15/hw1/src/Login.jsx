import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CREDENTIALS = {
  username: "admin",
  password: "adminPassword",
};

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleValueChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    let { username, password } = form;
    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/users");
    } else {
      alert("Incorrect Credentials");
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>
      <input
        name="username"
        type="text"
        placeholder="username"
        value={form.username}
        onChange={handleValueChange}
      />
      <input
        name="password"
        type="text"
        placeholder="password"
        value={form.password}
        onChange={handleValueChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;

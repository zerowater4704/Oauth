import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

const DashBoard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:3030/auth/me", { withCredentials: true })
      .then((response) => setUser(response.data.user))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:3030/auth/logout", { withCredentials: true })
      .then(() => {
        setUser(null);
        window.location.href = "/";
      });
  };

  if (!user) {
    return (
      <div>
        <h1>ログインしていません</h1>
        <a href="/">ログインページへ</a>
      </div>
    );
  }

  return (
    <div>
      <h1>ようこそ、{user.name}</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default DashBoard;

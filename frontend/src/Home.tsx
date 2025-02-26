const Home: React.FC = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3030/auth/google";
  };

  return (
    <div>
      <h1>Google Oauthログイン</h1>
      <button onClick={handleLogin}>Googleログイン</button>
    </div>
  );
};

export default Home;

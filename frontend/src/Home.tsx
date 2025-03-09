const Home: React.FC = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div>
      <h1>Google Oauthログイン</h1>
      <button onClick={handleLogin}>Googleログイン</button>
    </div>
  );
};

export default Home;

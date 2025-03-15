const Home: React.FC = () => {
  const handleLogin = () => {
    console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
    console.log(
      "Google Auth URL:",
      `${import.meta.env.VITE_API_URL}/auth/google`
    );

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

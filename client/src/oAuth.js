const handleGoogleLogin = () => {
    const redirectUri = `http://localhost:3000`;
    const authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '487637006084-qn5i9lvc40pebgfmg78km72pjoqd9cmd.apps.googleusercontent.com';
    const scope = 'https://www.googleapis.com/auth/userinfo.email';
    const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    window.location.href = url;
  };
<button onClick={handleGoogleLogin}>Login with Google</button>

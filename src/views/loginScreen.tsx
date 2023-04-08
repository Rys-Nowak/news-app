import "./styles.css";

function LoginScreen() {
  return (
    <div className="back">
      <h1>Sign in</h1>
      <form className="login">
        <input type="text" placeholder="Username"/>
        <br />
        <input type="password" placeholder="Password"/>
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginScreen;

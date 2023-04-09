import "./styles.css";

function LoginScreen() {
  return (
    <div>
      <h1 className="welcome">Welcome!</h1>
      <div className="back">
        <h1 className="signInHeader">Sign in</h1>
        <form className="login">
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit" className="signIn">
            Log in
          </button>
          <br />
          <button className="registerButton" onClick={() => {}}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;

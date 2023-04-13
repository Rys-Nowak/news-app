import { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";

type SignUpFormProps = {
  back: React.Dispatch<React.SetStateAction<boolean>>;
};

function handleChange(set: React.Dispatch<React.SetStateAction<string>>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    set(event.target.value);
  };
}

function SignUpForm({ back }: SignUpFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (username.length > 0 && username.length < 5) {
      setMessage("Username too short!");
    } else if (!passwordsMatch && confirmedPassword.length > 0) {
      setMessage("Different passwords!");
    } else if (
      password.length < 8 &&
      password.length > 0 &&
      confirmedPassword.length > 0
    ) {
      setMessage("Password too short!");
    } else {
      setMessage("");
    }
  }, [password, confirmedPassword, username]);

  useEffect(() => {
    setPasswordsMatch(password === confirmedPassword);
  }, [password, confirmedPassword]);

  return (
    <div>
      <h1 className="signInHeader">Sign up</h1>
      <form className="login">
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange(setUsername)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange(setPassword)}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange(setConfirmedPassword)}
        />
        <br />
        <Link to="/home">
          <button
            type="submit"
            className="signInButton"
            onClick={() => {
              // if
              // sign up
            }}
          >
            Sign up
          </button>
        </Link>
        <br />
        {message !== "" ? (
          <p className="error">{message}</p>
        ) : (
          <button className="registerButton" onClick={() => back(false)}>
            Go back
          </button>
        )}
      </form>
    </div>
  );
}

export default SignUpForm;

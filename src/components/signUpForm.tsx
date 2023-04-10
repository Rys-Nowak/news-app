import { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";

type SignUpFormProps = {
  back: any;
};

function handleChange(set: React.Dispatch<React.SetStateAction<string>>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    set(event.target.value);
  };
}

/**
 * Checks if the email is valid
 * @param {string} email
 * @returns {boolean} true if valid, false otherwise
 */
const validateEmail = (email: string): boolean => {
  return (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null
  );
};

function SignUpForm({ back }: SignUpFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (email.length > 0 && !validateEmail(email)) {
      setMessage("Invalid email!");
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
  }, [password, confirmedPassword, email]);

  useEffect(() => {
    setPasswordsMatch(password === confirmedPassword);
  }, [password, confirmedPassword]);

  return (
    <div>
      <h1 className="signInHeader">Sign up</h1>
      <form className="login">
        <input
          type="text"
          placeholder="Email address"
          onChange={handleChange(setEmail)}
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
            className="signIn"
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
          <button
            className="registerButton"
            onClick={() => {
              back(false);
            }}
          >
            Go back
          </button>
        )}
      </form>
    </div>
  );
}

export default SignUpForm;

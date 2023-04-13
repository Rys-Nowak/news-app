import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

function handleChange(set: React.Dispatch<React.SetStateAction<string>>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    set(event.target.value);
  };
}

type SignInFormProps = {
  reg: React.Dispatch<React.SetStateAction<boolean>>;
};

function SignInForm({ reg }: SignInFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="signInHeader">Sign in</h1>
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
        <Link to="/home">
          <button
            type="submit"
            className="signInButton"
            onClick={() => {
              // if
              // sign in
            }}
          >
            Log in
          </button>
        </Link>
        <br />
        <button className="registerButton" onClick={() => reg(true)}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignInForm;

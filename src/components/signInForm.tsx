import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

function handleChange(set: React.Dispatch<React.SetStateAction<string>>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    set(event.target.value);
  };
}

type SignInFormProps = {
  reg: any;
};

function SignInForm({ reg }: SignInFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="signInHeader">Sign in</h1>
      <form className="login">
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange(setEmail)}
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
            className="signIn"
            onClick={() => {
              // if
              // sign in
            }}
          >
            Log in
          </button>
        </Link>
        <br />
        <button className="registerButton" onClick={reg}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignInForm;

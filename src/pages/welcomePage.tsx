import SignInForm from "../components/signInForm";
import SignUpForm from "../components/signUpForm";
import { useState } from "react";

function Welcome() {
  const [register, setRegister] = useState(false);

  return (
    <div>
      <h1 className="welcome">Welcome!</h1>
      <div className="back">
        {register ? <SignUpForm back={setRegister} /> : <SignInForm reg={setRegister} />}
      </div>
    </div>
  );
}

export default Welcome;

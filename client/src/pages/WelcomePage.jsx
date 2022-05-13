import Wrapper from "../assets/wrappers/WelcomePage";
import logo from "../assets/images/logo.svg"

const Welcome = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={logo} />
        <h1>Welcome!!!</h1>
        <p>Congratulations, you have successfully registered.</p>
        <button>Continue</button>
      </div>
    </Wrapper>
  );
};

export default Welcome;

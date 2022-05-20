import Wrapper from '../assets/wrappers/Signup'
import { Logo, FormRow, Alert } from "../components";
const Signup = () => {
    return(
        <Wrapper >
            <div class="login">
                <Logo />
                <h1>Signup</h1>
                
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Submit</button>
                <div class="signup">
                    Already a member? <a href="http://localhost:3000/Login">Login</a>
                </div>
                
            </div>   
  
        </Wrapper>
    );

};


export default Signup;
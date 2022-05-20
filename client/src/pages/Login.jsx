import Wrapper from '../assets/wrappers/Login'
import { Logo, FormRow, Alert } from "../components";

const Login = () => {
    return(
        <Wrapper >
           <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css " />
           
            <div class="login">
                  <Logo />
                  <h1>Login Member</h1>
                  
                     
                  <input type="text" placeholder="Username"></input>
                  
                  
                  <input type="password" placeholder="Password"></input>
                  <div class="pass">
                     <a href="http://localhost:3000/Forgot">Forgot Password</a>
                  </div>
                  <button>Login</button>
                  <div class="or">Or</div>
                  
                  <button class="continue"><i class="fa fa-google icon1"></i>  Continue with Google</button>
                  <button class="continue"><i class="fa fa-facebook icon2"></i>  Continue with Facebook</button>
                  <div class="signup">
                     Not a member? <a href="http://localhost:3000/Signup">Signup</a>
                  </div>
            </div>
           
               
           
           
        </Wrapper>
    );

};


export default Login;
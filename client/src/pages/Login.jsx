import Wrapper from '../assets/wrappers/Login'

const Login = () => {
    return(
        <Wrapper >
           
            <div class="login">
                  <h1>Login Member</h1>
                  <input type="text" placeholder="Username"></input>
                  <input type="password" placeholder="Password"></input>
                  <div class="pass">
                     <a href="">Forgot Password</a>
                  </div>
                  <button>Login</button>
                  <div class="or">Or</div>
                  <button class="continue">Continue with Google</button>
                  <button class="continue">Continue with Facebook</button>
                  <div class="signup">
                     Not a member? <a href="">Signup</a>
                  </div>
            </div>
           
               
           
           
        </Wrapper>
    );

};


export default Login;
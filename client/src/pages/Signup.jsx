import Wrapper from '../assets/wrappers/Signup'

const Signup = () => {
    return(
        <Wrapper >
            <div class="login">
                <h1>Register</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Submit</button>
                <div class="signup">
                    Already a member? <a href="">Login</a>
                </div>
                
            </div>   
  
        </Wrapper>
    );

};


export default Signup;
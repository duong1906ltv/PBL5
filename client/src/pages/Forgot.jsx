import Wrapper from '../assets/wrappers/Forgot'

const Forgot = () => {
    return(
        <Wrapper>
           
            <div class="login">
                    <h2>Can not Login?</h2>
                    <input type="text" placeholder='Fill your Email'/>
                    
                    <button>Send recovery link</button>
                    <div class="signup">
                        <a href="">Back to Login</a>
                    </div>

            </div> 
           
               
           
           
        </Wrapper>
    );

};

export default Forgot;
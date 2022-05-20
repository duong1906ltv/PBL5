import Wrapper from '../assets/wrappers/Forgot'
import { Logo, FormRow, Alert } from "../components";
const Forgot = () => {
    return(
        <Wrapper className="full-page">
         <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css " />
             <div class="login">
                    <Logo/>
                    <h2>Can not Login?</h2>
                    <input type="text" placeholder='Fill your Email'/>
                    
                    <button>Send recovery link</button>
                    <div class="signup">
                        <a href="http://localhost:3000/Login">Back to Login</a>
                    </div>

             </div> 
         
            
           
               
           
           
        </Wrapper>
    );

};

export default Forgot;
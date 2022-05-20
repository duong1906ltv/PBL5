import styled from "styled-components";

const Wrapper = styled.main`

    
    


    
.logo {
        display: block;
        margin: 0 auto;
        margin-bottom: 1.38rem;
        margin-top: 10px;
      }
.login{
    position: absolute;
    width: 350px;
    height: 450px;
    border: 3px solid grey;
    border-radius: 10px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(120deg,#0a90ea, #08a073);
    
}
h2{
    color: black;
    font-family: sans-serif;
    margin-bottom: 40px;
    margin-top: 30px;
    font-size:25px
    
}
input{
    width: 300px;
    height: 45px;
    font-family: sans-serif;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 2px solid grey;
    padding-left: 20px;
}
button{
    width: 250px;
    height: 45px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: none;
    background-color: #45a049;
    color: white;
    font-size: medium;
    font-family: sans-serif;
}


button:hover{
    font-size: 18px;
}


.signup{
    font-size: 18px;
    margin: 20px 20px 20px 20px ;

}

`;
export default Wrapper
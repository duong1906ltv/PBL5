import styled from "styled-components";

const Wrapper = styled.main`
  text-align: left; 
  display: flex;  
  align-items: center;
  justify-content: center;   
  background-size: cover;
  font-size: 20px;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  label{
    margin-right: 1rem;
    font-weight: bold;
  }
  input{
    width:70%;
  }
  .form-control{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
  } 
  
  button{    
    font-size: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 2rem;
    background-color: crimson;
    border-color: white;
    color: blanchedalmond;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .button-group {
    text-align: center;
  }
  button:hover{
    cursor: pointer;
  }  

`;

export default Wrapper;
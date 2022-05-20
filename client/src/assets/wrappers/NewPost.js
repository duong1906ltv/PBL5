import styled from "styled-components";

const Wrapper = styled.main`
  text-align: left; 
  display: flex;
  align-items: center;
  justify-content: center;   
  background-size: cover;
  position: absolute;
  .post-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .address-box{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid var(--primary-600);
    border-radius: 1rem;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .label-main{
    font-weight: bold;
  }
  label{
    margin-right: 0.5rem;
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
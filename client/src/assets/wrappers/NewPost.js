import styled from "styled-components";

const Wrapper = styled.main`
  text-align: left; 
  display: flex;  
  align-items: center;
  justify-content: center;   
  font-size: 16px;
  font-family: Roboto;
  margin-left: auto;
  margin-right: auto;
  label{
    width:25%;
  }
  .form-control{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 12px;
    margin-bottom: 12px;
    width: 60vw;
  }
  

`;

export default Wrapper;
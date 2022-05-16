import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
    background-image: url('https://i.pinimg.com/originals/14/f1/55/14f15590d4723f4826076d0620979cfa.jpg');
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;  
  .image {
  position: right;
  }
  
  h1 {
    text-align: center;
    font-family: 'Kavoon', sans-serif;
    font-size: 2.5em;
    color: black;
  }
  .ResendContainer {
    margin-top: 100px;
    margin-right: 360px;
    margin-left: 360px;
    text-align: center;
    height: 335px;
    background-color: aliceblue;
    box-shadow: 2ex;
    border-radius: 10px;
    margin-bottom: 2px;
  }
  button{
    background-color: 	#FFCC00; 
    border: none;
    color: white;
    padding: 12px 25px;
    text-align: center; 
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    margin-top: 15px;
  }
  P{
    font-size: larger;
  }
  h{
    font-size: large;
  }
`;

export default Wrapper;
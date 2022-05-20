import styled from "styled-components"

const Wrapper = styled.div`
  .form{
    background: linear-gradient(120deg,#08a073,#0a90ea );
    color: black;
  }
  .btn{
    background: orange;
    text-align: center;
    margin-left: 180px;
  }
  .input-group {
    display: flex;
    margin-top: 1rem; 
  }

  .input-group.flex-row {
    justify-content: space-between;
    align-items: center;

    label {
      width: 30%;
    }

    select {
      width: 60%
    }

    input {
      width: 60%;
    }

    .input-radio {
      label {
        margin-right: 1rem;
      }
    }
  }

  .input-group.flex-col {
    flex-direction: column;
    align-items: center;
    label {
      width: 100%;
    }
    input {
      width: 80%;
    }
  }
  
`

export default Wrapper
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: var(--white);
  
  .post {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid var(--primary-600);
    border-radius: 0.15rem;
    gap: 1rem;

    * {
      margin: 0;
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .post-image{
    width: 30%;
    border-radius: 0.3rem;
  }

  .post-content{
    60%;

      h5 {
        font-size: 1.2em;
        color: var(--primary-600);
      }

      .description-content {
        font-size: 0.9rem;
        color: var(--grey-500);
      }
  }

  .info-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0.5rem 0rem;

    .price-content {
      color: var(--yellow-dark);
      border-bottom: 1px solid var(--yellow-dark);
    }
    
    .area-content, .position-content {
      color: var(--grey-700);
      border-bottom: 1px solid var(--grey-700);

    }

    .time-content {
      color: var(--grey-400);
      margin-right: 1rem;
    }
  }

  .author-content {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      text-transform: capitalize;
      color: var(--grey-400);
    }

    .author-phone{
      margin-left: auto;
      border: 1px solid var(--primary-500);
      border-radius: 3px;
      color: var(--primary-500);
      padding: 0 0.5rem;
    }
    .contact-content {
      margin-right: 1rem;
      margin-left: 0.5rem;
      border: 1px solid var(--primary-500);
      border-radius: 3px;
      background: var(--primary-500);
      color: var(--white);  
      padding: 0 0.5rem;
    }
  }

`

export default Wrapper
import { Filtering } from "../../components";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import BriefPostForFind from "../../components/BriefPostForFind";
import axios from "axios";
import { useAppContext } from "../../context/appContext";

function AllPosts(props) {
  const [result, setResult] = useState([]);
  const { posts } = useAppContext();

  return (
    <Wrapper>
      <div className="filtering">
        <Filtering setResult={setResult} />
      </div>
      <div className="content-container">
        {result.length === 0
          ? posts.map((post) => <BriefPostForFind post={post} />)
          : result.map((post) => <BriefPostForFind post={post} />)}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .filtering {
    min-height: 10vh;
  }

  .content-container {
    min-height: 100vh;
    border: 1px solid blue;
  }
`;

export default AllPosts;

import { Filtering } from '../../components'
import styled from 'styled-components'

function AllPosts() {
  return (
    <Wrapper>
      <div className='filtering'>
        <Filtering />
      </div>
      <div className='content-container'></div>
    </Wrapper>
  )
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
`

export default AllPosts

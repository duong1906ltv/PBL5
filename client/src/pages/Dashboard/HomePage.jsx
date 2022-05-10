import React from 'react'
import { BriefPost, Menu } from '../../components'
import styled from 'styled-components'
import posts from '../../utils/post'

function HomePage() {
  function getHotPosts() {
    return posts.filter((post) => post.status === 'hot')
  }

  function getNewPosts() {
    return posts.filter((post) => post.status === 'new')
  }

  const hotPosts = getHotPosts()

  const newPosts = getNewPosts()

  return (
    <Wrapper>
      <div className='container'>
        <Menu />
        <div className='contents'>
          <div className='hot-content'>
            <h3>Hot Posts</h3>
            <div className='posts'>
              {hotPosts.map((post) => (
                <BriefPost key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div className='new-content'>
            <h3>New Posts</h3>
            <div className='posts'>
              {newPosts.map((post) => (
                <BriefPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .container {
    width: 100%;
  }
  .contents {
    display: flex;
    padding: 1rem 0;

    h3 {
      text-align: center;
      color: var(--primary-600);
      margin-top: 1rem;
    }
  }

  .hot-content {
    width: 70%;
    background: var(--white);
    margin-right: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .new-content {
    width: 30%;
    background: var(--white);
    margin-left: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`

export default HomePage
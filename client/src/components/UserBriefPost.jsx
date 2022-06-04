import Wrapper from '../assets/wrappers/UserBriefPost'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function UserBriefPost({ post }) {
  let date = moment(post.date)
  date = date.format('MMM Do, YYYY')
  let navigate = useNavigate()
  let id = post._id

  const clickPost = () => {
    navigate('/detail-post/' + id)
  }

  const infoContent = (
    <div className='info-content'>
      <span className='price-content'>{post.rent_price}</span>
      <span className='area-content'>
        {post.motel_area}
        <sup>2</sup>
      </span>
      <span className='position-content'>{post.city}</span>
      <span className='time-content'>{date}</span>
    </div>
  )

  const authorContent = (
    <div className='author-content'>
      <img src={post.createdBy.user_ava} alt={post.createdBy.username} />
      <span className='author-name'>{post.createdBy.username}</span>
    </div>
  )

  return (
    <Wrapper>
      <div className='post'>
        <div className='flex-row'>
          <img className='post-image' src={post.motel_image} alt={post.title} />
          <div className='post-content'>
            <div className='main-content' onClick={clickPost}>
              <h5>{post.title}</h5>
              {infoContent}
              <p className='description-content'>{post.description}</p>
            </div>
            {authorContent}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default UserBriefPost
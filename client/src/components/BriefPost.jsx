import Wrapper from '../assets/wrappers/BriefPost'

function BriefPost(props) {
  const {
    title,
    imageUrl,
    description,
    position,
    price,
    area,
    author,
    time,
    status,
  } = props.post

  const infoContent = (
    <div className='info-content'>
      <span className='price-content'>{price}</span>
      <span className='area-content'>
        {area}
        <sup>2</sup>
      </span>
      <span className='position-content'>{position}</span>
      {status === 'hot' && <span className='time-content'>{time}</span>}
    </div>
  )

  const authorContent = (
    <div className='author-content'>
      <img src={author.avaUrl} alt={author.name} />
      <span className='author-name'>{author.name}</span>
      <span className='author-phone'>{author.phone}</span>
      <span className='contact-content'>Contact</span>
    </div>
  )

  return (
    <Wrapper>
      <div className='post'>
        <div className='flex-row'>
          <img className='post-image' src={imageUrl} alt={title} />
          <div className='post-content'>
            <div className='main-content'>
              <h5>{title}</h5>
              {status === 'hot' && infoContent}
              {status === 'hot' && (
                <p className='description-content'>{description}</p>
              )}
            </div>
            {status === 'hot' && authorContent}
          </div>
        </div>
        {status === 'new' && infoContent}
      </div>
    </Wrapper>
  )
}

export default BriefPost

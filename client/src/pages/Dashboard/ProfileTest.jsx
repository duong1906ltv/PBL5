import React from 'react'
import Wrapper from '../../assets/wrappers/ProfileTest'
import UserBriefPost from '../../components/UserBriefPost'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { MdOutlineDataSaverOff } from 'react-icons/md'

function ProfileTest() {
  const [isEditForm, setIsEditForm] = useState(false)
  const post = {
    id: 1,
    title: 'Best Room',
    description: 'Quiet, clean and beautiful. Come here to enjoy all..',
    motel_image:
      'https://www.thespruce.com/thmb/g9uX0wRr7tOp2S3iwRdBbaar4Vs=/3855x2891/smart/filters:no_upscale()/master-bedroom-in-new-luxury-home-with-chandelier-and-large-bank-of-windows-with-view-of-trees-1222623844-212940f4f89e4b69b6ce56fd968e9351.jpg',
    motel_area: 100,
    rent_price: '99$',
    city: 'Da Nang',
    createdBy: {
      username: 'Dinh Duong',
      user_ava:
        'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
    },
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setIsEditForm(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditForm(false)
  }

  return (
    <Wrapper>
      <div className='container--left'>
        <div className='user__info'>
          <div className='ava'>
            <img
              src='https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
              alt='user-name'
            />
          </div>
          <div className='name'>Dinh Duong</div>
          <div className='intro'>
            I have a lot of clean and quiet rooms for you guys, contact me to
            know more.
          </div>
          <div className='action'>
            <button className='btn--follow'>Follow</button>
            <button className='btn--message'>Message</button>
          </div>
        </div>
        <div className='user__social'>
          <ul>
            <li>
              <span>Website</span>
              <span>Website id</span>
            </li>
            <li>
              <span>Facebook</span>
              <span>Facebook id</span>
            </li>
            <li>
              <span>Zalo</span>
              <span>Zalo id</span>
            </li>
          </ul>
        </div>
        <div className='user__view-more'>
          <a href='/'>View more information</a>
        </div>
      </div>
      <div className='container--right'>
        <div className='user__form'>
          <form>
            <div className='form-input-group'>
              <label htmlFor='full-name'>Full Name</label>
              <input
                type='text'
                name='full-name'
                id='full-name'
                value='Phung Dinh Duong'
                className={isEditForm ? 'input-form' : 'input-text'}
                disabled={!isEditForm}
              />
            </div>
            <div className='form-input-group'>
              <label htmlFor='full-name'>Phone</label>
              <input
                type='text'
                name='full-name'
                id='full-name'
                value='0123456789'
                className={isEditForm ? 'input-form' : 'input-text'}
                disabled={!isEditForm}
              />
            </div>
            <div className='form-input-group'>
              <label htmlFor='full-name'>Address</label>
              <input
                type='text'
                name='full-name'
                id='full-name'
                value='113 Nguyen Luong Bang'
                className={isEditForm ? 'input-form' : 'input-text'}
                disabled={!isEditForm}
              />
            </div>
            <div className='action-form'>
              {!isEditForm && (
                <button onClick={handleEdit} className='edit-btn'>
                  <AiFillEdit className='icon' />
                  Edit
                </button>
              )}

              {isEditForm && (
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='submit-btn'
                >
                  <MdOutlineDataSaverOff />
                  Save changes
                </button>
              )}
            </div>
          </form>
        </div>
        <div className='user__post'>
          <div className='post__container'>
            <UserBriefPost key={post.id} post={post} />
            <div className='post__action'>
              <button>
                <BiEdit className='edit-icon' />
              </button>
              <button>
                <RiDeleteBin6Line className='remove-icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProfileTest

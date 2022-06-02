import React from 'react'
import styled from 'styled-components'
import userPosts from '../../utils/userPost'
import { NavLink } from 'react-router-dom'
import { BsThreeDots } from 'react-icons/bs'
import { useAppContext } from '../../context/appContext'

function Profile() {
  const posts = userPosts
  const {user}= useAppContext()
  return (
    <Wrapper>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='index'>
        <div className='img'>
        </div>
        <div className='infor'>
            <p className='p-infor'>Username</p>
            <p className='p-infor'>Address</p>
            <p className='p-infor'>Phone Number</p>
            <p className='p-infor'>University</p>
            <p className='p-infor'>Hobby</p>
        </div>
        <div className='name'>
          {/* <p>Nguyen Duc Chinh - Admin</p> */}
          <h4>Profile</h4>
          <h5>Nguyen Duc Chinh - Admin</h5>
          <p className='email'>ducchinhbg01@gmail.com</p>
          <button className='ib'><i class="fas fa-cat"></i> Chat</button>
        </div>
        <div className='input'>
          <div className='input1'>
            <p className='p-input'>ducchinhbg01</p>
          </div>
          <div className='input1'>
            <p className='p-input'>123 Nguyen Luong Bang, Lien Chieu, Da Nang</p>
          </div>
          <div className='input1'>
            <p className='p-input'>0981669453</p>
          </div>
          <div className='input1'>
            <p className='p-input'>Dai hoc Bach Khoa Da Nang</p>
          </div>
          <div className='input1'>
            <p className='p-input'></p>
          </div>
        </div>
      </div>
  

      
      
    </Wrapper>
  )
}

const Wrapper = styled.main`

.index{
  position: relative;
  width:100%;
  height: 700px;
  background-color: white;

}
.img{
  position: absolute;
  width:300px;
  height: 300px;
  border: 0.5px solid #F5F5F5;
  background-color:#F8F8F8;

}
.infor{
  position: absolute;
  width:300px;
  height: 400px;
  top:300px;
  border: 0.5px solid #F5F5F5;
  // background-color: yellow;
}
.name{
  position: absolute;
  width:842px;
  height: 300px;
  left:300px;
  border: 0.5px solid #F5F5F5;
  // background-color: yellow;

}
.input{
  position: absolute;
  width:842px;
  height: 400px;
  left:300px;
  top:300px;
  border: 0.5px solid #F5F5F5;
 
}
p{
  margin-left:15px;
  margin-top: 35px;
 
}
h5{
  margin-left:15px;
  margin-top: 35px;
 
}
h4{
  margin-left:250px;
  margin-top: 35px;
  color: #00BFFF;
 
}
.input1{
  
  width:700px;
  height: 35px;
  margin-left:15px;
  margin-top: 30px;

  background-color: #F0F0F0;
 
}
.p-input{
  position: absolute;
  margin-top:5px;
  
}
.ib{
  position: absolute;
  width:150px;
  height: 40px;
  top:250px;
  left:300px;
  color: white;
  background-color: #228B22;
}
.email{
  color: #00BFFF;
}



  }
`

export default Profile


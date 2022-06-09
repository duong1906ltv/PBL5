import React from "react";
import Wrapper from "../../assets/wrappers/ProfileTest";
import UserBriefPost from "../../components/UserBriefPost";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { useAppContext } from "../../context/appContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileTest() {
  const [isEditForm, setIsEditForm] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();
  const {
    posts,
    getPosts,
    user,
    username,
    firstName,
    lastName,
    phone_number,
    address,
    getProfileById,
    handleChange,
    updateUserProfile,
  } = useAppContext();

  useEffect(() => {
    getPosts();
    getProfileById(id);
  }, [id]);

  const handleProfileInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  function getPostByUserId() {
    return posts.filter((post) => post.createdBy._id === id);
  }
  const postByUserId = getPostByUserId();

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditForm(false);
    updateUserProfile();
  };

  const handleChat = async (e) => {
    e.preventDefault();
    const res = await axios("/api/conversation/find/" + user._id + "/" + id);
    if (res.data === null) {
      const data = {
        senderId: user._id,
        receiverId: id,
      };
      await axios.post("/api/conversation/", data);
    }
  };

  return (
    <Wrapper>
      <div className="container--left">
        <div className="user__info">
          <div className="ava">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="user-name"
            />
          </div>
          <div className="name">Dinh Duong</div>
          <div className="intro">
            I have a lot of clean and quiet rooms for you guys, contact me to
            know more.
          </div>
          {id !== user._id && (
            <div className="action">
              <button className="btn--follow">Follow</button>
              <button className="btn--message" onClick={handleChat}>
                Message
              </button>
            </div>
          )}
        </div>
        <div className="user__social">
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
        <div className="user__view-more">
          <a href="/">View more information</a>
        </div>
      </div>
      <div className="container--right">
        <div className="user__form">
          <form>
            <div className="form-input-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                className={isEditForm ? "input-form" : "input-text"}
                disabled={!isEditForm}
                onChange={handleProfileInput}
              />
            </div>
            <div className="form-input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                className={isEditForm ? "input-form" : "input-text"}
                disabled={!isEditForm}
                onChange={handleProfileInput}
              />
            </div>
            <div className="form-input-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                className={isEditForm ? "input-form" : "input-text"}
                disabled={!isEditForm}
                onChange={handleProfileInput}
              />
            </div>
            <div className="form-input-group">
              <label htmlFor="phone_number">Phone</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                value={phone_number}
                className={isEditForm ? "input-form" : "input-text"}
                disabled={!isEditForm}
                onChange={handleProfileInput}
              />
            </div>
            <div className="form-input-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                className={isEditForm ? "input-form" : "input-text"}
                disabled={!isEditForm}
                onChange={handleProfileInput}
              />
            </div>
            {id === user._id && (
              <div className="action-form">
                {!isEditForm && (
                  <button onClick={handleEdit} className="edit-btn">
                    <AiFillEdit className="icon" />
                    Edit
                  </button>
                )}

                {isEditForm && (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="submit-btn"
                  >
                    <MdOutlineDataSaverOff />
                    Save changes
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
        <div className="user__post">
          {postByUserId.map((post) => (
            <React.Fragment key={post._id}>
              <div className="post__container">
                <UserBriefPost post={post} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfileTest;

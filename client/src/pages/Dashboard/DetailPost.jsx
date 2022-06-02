import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import { ImageSlider } from "../../components";
import SliderData from "../../utils/sliderData";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import {
  AiFillWechat,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { useParams } from "react-router-dom";

function DetailPost(props) {
  const { getPosts, posts, isLoading } = useAppContext();

  let { id } = useParams();

  useEffect(() => {
    getPosts();
  }, [id]);

  function getPostDetail() {
    return posts.filter((post) => post._id === id);
  }

  const postDetails = getPostDetail();

  return (
    <Wrapper>
      {postDetails.map((data) => (
        <>
          <div className="flex-row align-center space-between nav-menu">
            <div className="nav-path">
              {data.city}
              <AiOutlineLeft className="icon" />
              {data.district}
              <AiOutlineLeft className="icon" />
              {data.ward}
            </div>
            <div className="nav-btns flex-row space-between">
              <div className="btn-left">
                <AiOutlineCaretLeft className="icon icon-left" />
                Back to list
              </div>
              <div className="btn-right icon-right">
                Next post
                <AiOutlineCaretRight className="icon icon-right" />
              </div>
            </div>
          </div>
          <div className="detail-post-container flex-row align-start space-between">
            <div className="post-container flex-column">
              <div className="post-slide">
                <ImageSlider slides={SliderData} />
              </div>
              <div className="post-content flex-column">
                <span>
                  <b>Motel Name:</b> {data.title}
                </span>
                <div className="flex-row space-between">
                  <span>
                    <b>Price:</b> {data.rent_price}
                  </span>
                  <span>
                    <b>Area:</b> {data.motel_area}<sup>2</sup>
                  </span>
                </div>
                <span>
                  <b>Detail:</b> {data.description}
                </span>
                <span className="flex-row align-center">
                  <b>Rating:</b>
                  <div className="icon-container">
                    <BsStarFill className="icon icon-star" />
                    <BsStarFill className="icon icon-star" />
                    <BsStarFill className="icon icon-star" />
                    <BsStarFill className="icon icon-star" />
                    <BsStar className="icon icon-star" />
                  </div>
                </span>
              </div>
              <div className="post-address"></div>
            </div>
            <div className="author-container flex-column">
              <div className="author-info flex-row align-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt="user-name"
                  className="ava"
                />
                <div className="flex-column">
                  <span className="name">Dinh Duong</span>
                  <span className="time-active">Active 5 minutes ago</span>
                </div>
                <div className="flex-column evaluate">
                  <span className="flex-row align-center">
                    Rating:
                    <div className="icon-container">
                      <BsStarFill className="icon icon-star" />
                      <BsStarFill className="icon icon-star" />
                      <BsStarFill className="icon icon-star" />
                      <BsStarFill className="icon icon-star" />
                      <BsStarHalf className="icon icon-star" />
                    </div>
                  </span>
                  <span>Chat Response: 76%</span>
                </div>
              </div>
              <div className="author-contact-container flex-column align-center justify-center">
                <div className="author-phone flex-row align-center">
                  <span className="icon-container">
                    <FiPhoneCall className="icon icon-phone" />
                  </span>
                  <span className="phone">0{data.phone_number}</span>
                  <span style={{ marginLeft: "1rem" }}></span>
                </div>
                <div className="author-chat flex-row align-center">
                  <span className="icon-container">
                    <AiFillWechat className="icon icon-chat" />
                  </span>
                  <span>Chat with Seller</span>
                </div>
              </div>
              <div className="post-comment">
                <h6>Comment about this post</h6>
                <div className="comment-list">
                  <div className="comment-item">
                    <div className="flex-row align-center">
                      <img
                        src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                        alt="user-name"
                        className="ava"
                      />
                      <div className="flex-column justify-center">
                        <span className="comment-author">Nguyen Van A</span>
                        <span className="comment-time">6 months ago</span>
                      </div>
                      <div className="rating">
                        <span className="flex-row align-center">
                          <span>Rating:</span>
                          <div className="icon-container">
                            <BsStarFill className="icon icon-star" />
                            <BsStarFill className="icon icon-star" />
                            <BsStarFill className="icon icon-star" />
                            <BsStarFill className="icon icon-star" />
                            <BsStar className="icon icon-star" />
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="comment-content">
                      This house is clean, the owner is very friendly!!
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="flex-row align-center">
                      <img
                        src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                        alt="user-name"
                        className="ava"
                      />
                      <div className="flex-column justify-center">
                        <span className="comment-author">Nguyen Van B</span>
                        <span className="comment-time">1 year ago</span>
                      </div>
                      <div className="rating">
                        <span className="flex-row align-center">
                          <span>Rating:</span>
                          <div className="icon-container">
                            <BsStarFill className="icon icon-star" />
                            <BsStarFill className="icon icon-star" />
                            <BsStar className="icon icon-star" />
                            <BsStar className="icon icon-star" />
                            <BsStar className="icon icon-star" />
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="comment-content">A little noisy!!!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 3rem;

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .align-start {
    align-items: flex-start;
  }

  .space-between {
    justify-content: space-between;
  }

  .nav-menu {
    .nav-path {
      color: var(--primary-500);
      font-weight: bold;
      cursor: pointer;
    }
    .nav-btns {
      gap: 1rem;

      .btn-left,
      .btn-right {
        padding: 0.2rem 1rem;
        background: var(--primary-500);
        color: var(--white);
        border: 1px solid var(--primary-500);
        border-radius: 20px;
        cursor: pointer;
      }

      .icon-left {
        margin-left: 0.2rem;
      }
      .icon-right {
        margin-left: 0.2rem;
      }
    }
  }

  .detail-post-container {
    width: 100%;
    gap: 3rem;
    padding: 2rem 0;
  }

  .post-container {
    flex: 1;
    justify-content: flex-start;

    .post-slide {
      margin-bottom: 1rem;
    }

    .post-content {
      padding: 0 1rem;

      span {
        border-bottom: 1px solid var(--primary-500);
        margin-top: 1rem;
        font-size: 1.1rem;
      }
    }

    .post-address {
      height: 200px;
      border-radius: 5px;
      border: 1px solid var(--primary-500);
      margin: 3rem 1rem;
    }
  }

  .icon {
    transform: translateY(20%);
    margin-right: 0.2rem;
  }

  .icon-container {
    margin: 0 0.5rem;
  }

  .icon-star {
    color: var(--yellow-dark);
  }

  .icon-phone {
    color: inherit;
    font-size: 1.5rem;
  }

  .icon-chat {
    color: inherit;
    font-size: 1.5rem;
  }

  .author-container {
    border: 2px solid var(--primary-500);
    border-radius: 10px;
    padding: 1rem;
    flex: 1;
    gap: 1rem;
    max-width: 450px;
    background: #f8f9fa;

    .author-info {
      .ava {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      .name {
        font-weight: bold;
      }
      .time-active {
        color: var(--grey-400);
      }

      .evaluate {
        margin-left: auto;
      }
    }

    .author-contact-container {
      gap: 1rem;
      .author-phone,
      .author-chat {
        padding: 0.5rem 2rem;
        border-radius: 10px;
        width: 90%;
        color: var(--white);
        cursor: pointer;
        user-select: none;
        transition: 0.2s ease-out;
      }

      .author-phone,
      .author-chat {
        border: 2px solid var(--yellow-dark);
        background: var(--white);
        color: var(--black);
      }

      .author-phone:hover,
      .author-chat:hover {
        background: var(--yellow-dark);
        color: var(--white);
      }
    }

    .post-comment {
      h6 {
        font-size: 1.2rem;
        margin: 0.5rem;
      }

      .comment-list {
        width: 90%;
        margin: 0 auto;
        .comment-item {
          margin-top: 1rem;
          font-size: 0.9rem;

          .ava {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 0.5rem;
          }
          .comment-author {
            font-weight: bold;
          }
          .comment-time {
            color: var(--grey-400);
          }
          .rating {
            margin-left: auto;
          }
          .comment-content {
            margin-left: calc(50px + 0.5rem);
          }
        }
      }
    }
  }
`;

export default DetailPost;

import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

function Stats() {
  return (
    <Wrapper className="full-page">
       
      <div className="chat-container">
        <div className="search-container">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="chat-title">
            <img src="/avatar2.webp" alt="image" />
            <div>Mai Xuan Nhat</div>
        </div>
        <form className="chat-form" >
            <input type={"text"}></input>
            <button>Send</button>
        </form> 
       
        <div className="conversation-list">
            <div className="conversation ">
            <img src="/avatar2.webp" alt="image" />
              <div className="title-text">Chinh</div>
              <div className="created-date">3 Minute ago</div>
              <div className="conversation-message">Con cho nay</div>
            </div>
           <div className="conversation">
            <img src="/avatar3.webp" alt="image" />
            <div className="title-text">Tuan</div>
            <div className="created-date">2 days ago</div>
            <div className="conversation-message">
             Rat vui
            </div>
          </div>
          <div className="conversation">
           <img src="/avatar4.png" alt="image" />
           <div className="title-text">Duong</div>
           <div className="created-date">3 days ago</div>
           <div className="conversation-message">
             Vui bth
           </div>
          </div>
         <div className="conversation">
           <img src="/avatar2.webp" alt="image" />
           <div className="title-text">Mai Xuan Nhat</div>
           <div className="created-date">2 days ago</div>
           <div className="conversation-message">
             Deo vui
           </div>
         </div>
         <div className="conversation">
           <img src="/avatar3.webp" alt="image" />
           <div className="title-text">Nhat</div>
           <div className="created-date">2 days ago</div>
           <div className="conversation-message">
             Deo vui
           </div>
         </div>
        </div>
        <div className="chat-message-list">
        <div className="message-row">
            <div className="other-message">
              <div className="message-content">
              <img src="/avatar2.webp" alt="image" />
               
               <div className="message-text">
                   Xin chao cac ban 
               </div>
               <div className="message-time">10 seconds ago</div>
             </div>
            </div>
        </div> 
        <div className="message-row">
            <div className="you-message">
              <div className="message-content">
                <div className="message-text">
                    Tro nay con khong a
                </div>
                <div className="message-time">1 minutes</div>
            </div>
            </div>
        </div>  
        <div className="message-row">
            <div className="you-message">
              <div className="message-content">
                <div className="message-text">
                    cho Duong
                </div>
                <div className="message-time">20 seconds ago</div>
            </div>
            </div>
        </div> 
        <div className="message-row">
            <div className="other-message">
              <div className="message-content">
              <img src="/avatar2.webp" alt="image" />
               
               <div className="message-text">
                   Tro nay con khong a 
               </div>
               <div className="message-time">1 minutes</div>
             </div>
            </div>
        </div>  
        <div className="message-row">
            <div className="you-message">
               <div className="message-content">
               
               <div className="message-text">
                   cho em thue voi
               </div>
               <div className="message-time">2 minutes</div>
               </div>
            </div>
        </div>    
      </div>
      </div>
     
    </Wrapper>
  );
}
const Wrapper = styled.div`
.chat-container {
  display: grid;
  grid:
      'search-container chat-title' 71px
      'conversation-list chat-message-list' 1fr
      'new-message-container chat-form' 50px
      / 275px 1fr;
  min-width: 1000px;
  max-width: 1000px;
  max-height: 800px;
  width: 100%;
  height: 95vh;
  background: white;
  border-radius: 10px;
}

.chat-form {
  display: flex;
  align-items: center;
  grid-area: chat-form;
  background: #EEE;
  border-radius: 0 0 10px 0;
  border-top: 1px solid darken(#EEE, 12.16);
  padding-left: 42px;
  padding-right: 22px;

  input {
    flex: 1 0 0;
    outline: none;
    padding: 8px;
    border: 2px solid darken(#EEE, 6.5%);
    border-right: none;
    color: darken(adjust-hue(#0048AA, -155), 23.33);
    border-radius: 6px 0 0 6px;
    font-size: 1.4rem;
    margin-left: -5px;
    
  }

  button {
    
    height: 46px;
    flex: 0 0 90px;
    border-radius: 0 6px 6px 0;
  }
}
.chat-message-list {
  grid-area: chat-message-list;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 20px 0px 20px;
  overflow-y: scroll;
}
.message-row {
  display: grid;
  grid-template-columns: 99%;
  margin-bottom: 20px;
}
.message-content {
  display: grid;  
  > img {
    border-radius: 100%;
    grid-row: span 2;
    width: 48px;
    height: 48px;
}
  > .message-time {
      font-size: 1.1rem;
      color: black;
  }
  > .message-text {
      padding: 9px 14px;
      font-size: 1.3rem;
      margin-bottom: 5px;
  }
}
.you-message {
  justify-content: end;

  > .message-content {
      justify-items: end;

      > .message-text {
          background: #0048AA;
          color:  #FFF;
          border: 1px solid #0048AA;
          border-radius: 14px 14px 0 14px;
      }
  }
}

.other-message {
  justify-items: start;

  > .message-content {
    justify-items: start;
    grid-template-columns: 48px 0.5fr;
    grid-column-gap: 5px;

      > .message-text {
          background: #EEE;
          color: #111;
          border: 1px solid darken(#EEE, 13.18);
          border-radius: 14px 14px 14px 0;
      }
  }
}
.conversation-list {
  grid-area: conversation-list;
  background: white;
  overflow-y: scroll;
}
.conversation {
  display: grid;
  grid-template-columns: 50px 1fr max-content;
  grid-gap: 2px;
  color: black; ;
  font-size: 1.3rem;
  border-bottom: 1px solid #54d1db;
  padding: 5px 20px 0px 15px;

&.active,
&:hover {
  background:  darken(#0048AA, 8%);
}

&:hover {
  cursor: pointer;
}

> img {
  grid-row: span 2;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.title-text {
  font-weight: bold;
  padding-left: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.created-date {
  color: 	#555555;
  white-space: nowrap;
  font-size: 0.9rem;
}

.conversation-message {
  grid-column: span 2;
  padding-left: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

}
.search-container {
  display: flex;
  align-items: center;
  grid-area: search-container;
  background:#54d1db ;
  padding: 0 20px;
  border-radius: 10px 0 0 0;
  box-shadow: 0 1px 3px -1px #000000bf;
  z-index: 1;

  input {
      width: 0;
      flex: 1 0 0;
      color: #EEE;
      outline: none;
      font-weight: bold;
      border-radius: 2px;
      height: 30px;
      border: 0;
      padding-left: 48px;
      padding-right: 20px;
      font-size: 1.4rem;
      background: url('search2.webp') no-repeat  #ffffff4d;
      background-position: 15px center;
      background-size: 20px 20px;
  }
  
  input::placeholder {
      color: #DDD;
      font-weight: bold;
  }
}
.chat-title {
  display: grid;
  grid: 1fr / 0.2fr 300px;
  align-content: center;
  align-items: center;
  grid-area: chat-title;
  background:  #54d1db;
  color: white;
  font-weight: bold;
  font-size: 1.9rem;
  border-radius: 0 10px 0 0;
  box-shadow: 0 1px 3px -1px darken(#EEE, 75.29);
  padding: 0 20px;
  z-index: 1;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }
}
 
`

export default Stats;

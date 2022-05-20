import Wrapper from "../assets/wrappers/NewPost";
import { Link } from "react-router-dom";

const NewPost = () => {
  return (
    <Wrapper>
      <form>
        <div className="address-box">
          <h5 className="label-main">Address</h5>
          <div className="post-row">
            <div>
              <label>City</label>
              <select>
                <option>Da Nang</option>
                <option>Ha Noi</option>
              </select>
            </div>
            <div>
              <label>District</label>
              <select>
                <option>Hai Chau</option>
                <option>Lien Chieu</option>
              </select>
            </div>
          <div>
            <label>Ward</label>
            <select>
              <option>Hoa Khanh</option>
              <option>Hoa Vang</option>
            </select>
          </div>
          </div>
          <div>
            <label>Specific Address</label>
            <input type='text'></input>
          </div>          
        </div>
        <div className="post-row">
          <div>
            <label className="label-main">Price</label>
            <input type='text'></input>
          </div>
          <div>
            <label className="label-main">Deposit</label>
            <input type='text'></input>
          </div>
          <div>
            <label className="label-main">Area</label>
            <input type='text'></input>
          </div>
        </div>
        <div>
            <label className="label-main">Tittle</label>
            <input type='text'></input>
        </div>
        <div>
            <label className="label-main">Description</label>
            <input type='text'></input>
        </div>
        <div className="post-row">
          <div>
            <label className="label-main">Images</label>
            <input type='file'></input>
          </div>
          <div>
            <label className="label-main">Videos</label>
            <input type='file'></input>
          </div>
        </div>
        <div className="button-group">
          <button>Preview</button>
          <button>Post</button>
          <button>Cancel</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default NewPost;

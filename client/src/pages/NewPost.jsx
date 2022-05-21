import Wrapper from '../assets/wrappers/NewPost'
import { useEffect } from 'react'

const NewPost = () => {
  let citis = document.getElementById('city')
  let districts = document.getElementById('district')
  let wards = document.getElementById('ward')

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
        renderCity(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  function renderCity(data) {
    for (const x of data) {
      citis.options[citis.options.length] = new Option(x.Name, x.Id)
    }

    // xứ lý khi thay đổi tỉnh thành thì sẽ hiển thị ra quận huyện thuộc tỉnh thành đó
    citis.onchange = function () {
      districts.length = 1
      wards.length = 1
      if (this.value !== '') {
        const result = data.filter((n) => n.Id === this.value)

        for (const k of result[0].Districts) {
          districts.options[districts.options.length] = new Option(k.Name, k.Id)
        }
      }
    }

    // xứ lý khi thay đổi quận huyện thì sẽ hiển thị ra phường xã thuộc quận huyện đó
    districts.onchange = function () {
      wards.length = 1
      const dataCity = data.filter((n) => n.Id === citis.value)
      if (this.value !== '') {
        const dataWards = dataCity[0].Districts.filter(
          (n) => n.Id === this.value
        )[0].Wards

        for (const w of dataWards) {
          wards.options[wards.options.length] = new Option(w.Name, w.Id)
        }
      }
    }
  }
  return (
    <Wrapper>
      <form>
        <div className='address-box'>
          <h5 className='label-main'>Address</h5>
          <div className='post-row'>
            <div class='input-group'>
              <select name='city' id='city'>
                <option value='' selected>
                  Select city
                </option>
              </select>
            </div>
            <div class='input-group'>
              <select name='district' id='district'>
                <option value='' selected>
                  Select district
                </option>
              </select>
            </div>
            <div class='input-group'>
              <select name='ward' id='ward'>
                <option value='' selected>
                  Select ward
                </option>
              </select>
            </div>
            {/* <div>
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
            </div> */}
          </div>
          <div>
            <label>Specific Address</label>
            <input type='text'></input>
          </div>
        </div>
        <div className='post-row'>
          <div>
            <label className='label-main'>Price</label>
            <input type='text'></input>
          </div>
          <div>
            <label className='label-main'>Deposit</label>
            <input type='text'></input>
          </div>
          <div>
            <label className='label-main'>Area</label>
            <input type='text'></input>
          </div>
        </div>
        <div>
          <label className='label-main'>Tittle</label>
          <input type='text'></input>
        </div>
        <div>
          <label className='label-main'>Description</label>
          <input type='text'></input>
        </div>
        <div className='post-row'>
          <div>
            <label className='label-main'>Images</label>
            <input type='file'></input>
          </div>
          <div>
            <label className='label-main'>Videos</label>
            <input type='file'></input>
          </div>
        </div>
        <div className='button-group'>
          <button>Preview</button>
          <button>Post</button>
          <button>Cancel</button>
        </div>
      </form>
    </Wrapper>
  )
}

export default NewPost

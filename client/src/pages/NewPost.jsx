import Wrapper from '../assets/wrappers/NewPost'
import { useEffect, useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import FormRowControl from '../components/FormRowControl';
import { useAppContext } from '../context/appContext';
import { Alert } from '../components'

const initialState = {
  city: '',
  district: '',
  ward: '',
  address: '',
  price: '',
  deposit: '',
  area: '',
  title: '',
  description: '',
  image: ''

}

const NewPost = () => {
  let citis = document.getElementById('city')
  let districts = document.getElementById('district')
  let wards = document.getElementById('ward')

  const { showAlert, displayAlert } = useAppContext();

  const [values, setValues] = useState(initialState);


  const handlePostInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


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
        citis = document.getElementById('city')
        districts = document.getElementById('district')
        wards = document.getElementById('ward')
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

  const onSubmit = (e) => {
    e.preventDefault()
    const { city, district, ward, address, price, deposit, area, title, description, image } = values
    if (!city || !district || !ward || !address || !price
      || !deposit || !area || !title || !description || !image) {
      displayAlert()
      return
    }
    console.log(city, district, ward, address, price, deposit, area, title, description, image);

  }
  return (
    <Wrapper>

      <Form onSubmit={onSubmit}>

        {showAlert && <Alert/>}

        <Form.Group className='form-control'>
          <Form.Label>City:</Form.Label>
          <Form.Select name='city' id='city' onChange={handlePostInput}>
            <option value={values.city} selected />
          </Form.Select>
        </Form.Group>

        <Form.Group className='form-control'>
          <Form.Label>District:</Form.Label>
          <Form.Select name='district' id='district' onChange={handlePostInput}>
            <option value={values.city} selected />
          </Form.Select>
        </Form.Group>

        <Form.Group className='form-control'>
          <Form.Label>Ward:</Form.Label>
          <Form.Select name='ward' id='ward' onChange={handlePostInput}>
            <option value={values.city} selected />
          </Form.Select>
        </Form.Group>

        <FormRowControl
          labelText='Address:'
          type='text'
          name='address'
          value={values.address}
          placeholder='Specific Address'
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText='Price:'
          type='number'
          name='price'
          value={values.price}
          placeholder='VND'
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText='Deposit:'
          type='number'
          name='deposit'
          value={values.deposit}
          placeholder='VND'
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText='Area:'
          type='number'
          name='area'
          value={values.area}
          placeholder='m2'
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText='Title:'
          type='text'
          name='title'
          value={values.title}
          handleChange={handlePostInput}
        />


        <Form.Group className="form-control" controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" name='description' placeholder="Write description here"
                        style={{ height: '100px' }} value={values.description} onChange={handlePostInput} />
        </Form.Group>

        <Form.Group className="form-control">
          <Form.Label>Image:</Form.Label>
          <FormControl
            aria-describedby="basic-addon1"
            type='file'
            accept="image/*"
            multiple
            name='image'
            value={values.image}
            onChange={handlePostInput}
          />
        </Form.Group>

        <Form.Group className="form-control">
          <Button variant="primary">Preview</Button>
          <Button variant="success" type='submit'>Post</Button>
          <Button variant="danger" href='/'>Cancel</Button>
        </Form.Group>

      </Form>
    </Wrapper>
  )
}

export default NewPost

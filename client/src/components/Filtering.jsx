// import { TwoThumbInputRange } from 'react-two-thumb-input-range'
import { useState, useEffect } from 'react'
import { GiDivergence } from 'react-icons/gi'
import { MdOutlineAddAlert } from 'react-icons/md'
import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  // ModalFooter,
  Card,
  CardText,
} from 'reactstrap'
import Wrapper from '../assets/wrappers/Filtering'

function Filtering() {
  const [dataCity, setDataCity] = useState([])
  const [dataDistrict, setDataDistrict] = useState([])
  const [dataWard, setDataWard] = useState([])
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
        setDataCity(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  const [isOpenCity, setIsOpenCity] = useState(false)
  const [isOpenDistrict, setIsOpenDistrict] = useState(false)
  const [isOpenWard, setIsOpenWard] = useState(false)

  // const [cityId, setCityId] = useState('')
  const toggleCity = () => {
    setIsOpenCity(!isOpenCity)
  }
  const toggleDistrict = () => {
    setIsOpenDistrict(!isOpenDistrict)
  }
  const toggleWard = () => {
    setIsOpenWard(!isOpenWard)
  }

  const getDistrict = (cityId) => {
    const res = dataCity.filter((item) => item.Id === cityId)[0]
    return res.Districts
  }

  const getWard = (districtId) => {
    const res = dataDistrict.filter((item) => item.Id === districtId)[0]
    return res.Wards
  }

  const clickCity = (e) => {
    toggleCity()
    setDataDistrict(getDistrict(e.target.id))
    toggleDistrict()
  }
  const clickDistrict = (e) => {
    toggleDistrict()
    setDataWard(getWard(e.target.id))
    toggleWard()
  }
  const clickWard = (e) => {
    toggleWard()
  }

  const listStyle = {}

  const listItemStyle = {
    borderBottom: '1px solid var(--grey-200)',
    padding: '1rem 0px',
    margin: '0',
  }

  return (
    <Wrapper>
      <div>
        <form className='form'>
          <div className='form__element'>
            <Button className='input__btn'>Phong tro, nha tro</Button>
            <Modal>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>Tim ban o ghep</ModalBody>
            </Modal>
          </div>
          <div className='form__element'>
            <Button className='input__btn' onClick={toggleCity}>
              Tinh, thanh pho
            </Button>
            <Modal isOpen={isOpenCity} toggle={toggleCity}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                <div style={listStyle}>
                  {dataCity &&
                    dataCity.length > 0 &&
                    dataCity.map((item) => (
                      <div onClick={clickCity} style={listItemStyle}>
                        <span id={item.Id}>{item.Name}</span>
                      </div>
                    ))}
                </div>
              </ModalBody>
            </Modal>
            <Modal isOpen={isOpenDistrict} toggle={toggleDistrict}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                {dataDistrict &&
                  dataDistrict.length > 0 &&
                  dataDistrict.map((item) => (
                    <Card onClick={clickDistrict}>
                      <CardText id={item.Id}>{item.Name}</CardText>
                    </Card>
                  ))}
              </ModalBody>
            </Modal>
            <Modal isOpen={isOpenWard} toggle={toggleWard}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                {dataWard &&
                  dataWard.length > 0 &&
                  dataWard.map((item) => (
                    <Card onClick={clickWard}>
                      <CardText id={item.Id}>{item.Name}</CardText>
                    </Card>
                  ))}
              </ModalBody>
            </Modal>
          </div>
          <div className='form__element'>
            <Button className='input__btn'>Chon gia</Button>
            <Modal>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>choose price</ModalBody>
            </Modal>
          </div>
          <div className='form__element'>
            <Button className='input__btn'>Dien tich</Button>
            <Modal>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>choose area</ModalBody>
            </Modal>
          </div>
          <div className='form__element'>
            <button className='submit__btn' type='submit'>
              Tim kiem
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default Filtering

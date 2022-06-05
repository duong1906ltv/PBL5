import { Form } from 'react-bootstrap';
import { useEffect} from 'react'
const SelectAddress = ({ }) => {
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
    return (
        <Form>
            <Form.Group className='form-control'>
                <Form.Label>City:</Form.Label>
                <Form.Select name='city' id='city'  >
                    <option value=" " selected />
                </Form.Select>
            </Form.Group>

            <Form.Group className='form-control'>
                <Form.Label>District:</Form.Label>
                <Form.Select name='district' id='district'  >
                    <option value=" " selected />
                </Form.Select>
            </Form.Group>

            <Form.Group className='form-control'>
                <Form.Label>Ward:</Form.Label>
                <Form.Select name='ward' id='ward' >
                    <option value=" " selected />
                </Form.Select>
            </Form.Group>
        </Form>
    )
}
export default SelectAddress
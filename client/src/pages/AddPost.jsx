import Wrapper from "../assets/wrappers/NewPost";
import { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import FormRowControl from "../components/FormRowControl";
import { useAppContext } from "../context/appContext";
import { Alert } from "../components";

const initialState = {
  title: "",
  category: "Rental Room",
  renter: "All",
  city: "",
  district: "",
  ward: "",
  address: "",
  price: 0,
  deposit: 0,
  area: 0,
  description: "",
  image: "",
  video: "",
  phone_number: "",
};

const AddPost = () => {
  let citis = document.getElementById("city");
  let districts = document.getElementById("district");
  let wards = document.getElementById("ward");

  const { showAlert, displayAlert, createPost } = useAppContext();

  const [values, setValues] = useState(initialState);

  const handlePostInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        citis = document.getElementById("city");
        districts = document.getElementById("district");
        wards = document.getElementById("ward");
        renderCity(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  function renderCity(data) {
    for (const x of data) {
      citis.options[citis.options.length] = new Option(x.Name, x.Id);
    }
    // xứ lý khi thay đổi tỉnh thành thì sẽ hiển thị ra quận huyện thuộc tỉnh thành đó
    citis.onchange = function () {
      districts.length = 1;
      wards.length = 1;
      if (this.value !== "") {
        const result = data.filter((n) => n.Id === this.value);

        for (const k of result[0].Districts) {
          districts.options[districts.options.length] = new Option(
            k.Name,
            k.Id
          );
        }
      }
    };

    // xứ lý khi thay đổi quận huyện thì sẽ hiển thị ra phường xã thuộc quận huyện đó
    districts.onchange = function () {
      wards.length = 1;
      const dataCity = data.filter((n) => n.Id === citis.value);
      if (this.value !== "") {
        const dataWards = dataCity[0].Districts.filter(
          (n) => n.Id === this.value
        )[0].Wards;

        for (const w of dataWards) {
          wards.options[wards.options.length] = new Option(w.Name, w.Id);
        }
      }
    };
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, city, district, ward, address, price, area } = values;
    if (!title || !city || !district || !ward || !address || !price || !area) {
      displayAlert();
      return;
    }
    createPost(values);
  };
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <h1>Add New Post</h1>

        {showAlert && <Alert />}

        <FormRowControl
          labelText="Title:"
          type="text"
          name="title"
          value={values.title}
          handleChange={handlePostInput}
        />

        <Form.Group className="form-control">
          <Form.Label>Category:</Form.Label>
          <Form.Select
            name="category"
            id="category"
            value={values.category}
            onChange={handlePostInput}
          >
            <option value="rentalRoom">Rental Room</option>
            <option value="findRoomate">Find Roomate</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="form-control">
          <Form.Label>Renter:</Form.Label>
          <Form.Select
            name="renter"
            id="renter"
            value={values.renter}
            onChange={handlePostInput}
          >
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="form-control">
          <Form.Label>City:</Form.Label>
          <Form.Select
            name="city"
            id="city"
            value={values.city}
            onChange={handlePostInput}
          >
            <option value=" " selected />
          </Form.Select>
        </Form.Group>

        <Form.Group className="form-control">
          <Form.Label>District:</Form.Label>
          <Form.Select
            name="district"
            id="district"
            value={values.district}
            onChange={handlePostInput}
          >
            <option value=" " selected />
          </Form.Select>
        </Form.Group>

        <Form.Group className="form-control">
          <Form.Label>Ward:</Form.Label>
          <Form.Select
            name="ward"
            id="ward"
            value={values.ward}
            onChange={handlePostInput}
          >
            <option value=" " selected />
          </Form.Select>
        </Form.Group>

        <FormRowControl
          labelText="Address:"
          type="text"
          name="address"
          value={values.address}
          placeholder="Specific Address"
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText="Price:"
          type="number"
          name="price"
          value={values.price}
          placeholder="VND"
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText="Deposit:"
          type="number"
          name="deposit"
          value={values.deposit}
          placeholder="VND"
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText="Area:"
          type="number"
          name="area"
          value={values.area}
          placeholder="m2"
          handleChange={handlePostInput}
        />

        <FormRowControl
          labelText="Phone number:"
          type="text"
          name="phone_number"
          value={values.phone_number}
          placeholder="Enter your number"
          handleChange={handlePostInput}
        />

        <Form.Group className="form-control" controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Write description here"
            style={{ height: "100px" }}
            value={values.description}
            onChange={handlePostInput}
          />
        </Form.Group>

        <Form.Group className="form-control">
          <Form.Label>Image:</Form.Label>
          <FormControl
            aria-describedby="basic-addon1"
            type="file"
            accept="image/*"
            multiple
            name="image"
            value={values.image}
            onChange={handlePostInput}
          />
        </Form.Group>

        <Form.Group className="form-control">
          <Button variant="primary">Preview</Button>
          <Button variant="success" type="submit">
            Post
          </Button>
          <Button variant="danger" href="/">
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </Wrapper>
  );
};

export default AddPost;

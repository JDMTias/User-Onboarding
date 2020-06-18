import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemberForm from "./Form";
import axios from "axios";
import formSchema from "./Validation";
import * as yup from 'yup'

function App() {
  // 1b
  const [formValues, setFormValues] = useState();
  // 1d
  const [data, setData] = useState([]);
  // 2e
  const [errorMessage, setError] = useState({});
  // 1c
  const onInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    // 2c
    const currentField = event.target.name;
    const value = event.target.value;
    // 2d
    yup.reach(formSchema, currentField)
      .validate(value)
      // 2f
      .then((response) => {
        setError({ ...errorMessage, [currentField]: error.errors });
      })
      .catch((error) => {
        setError({ ...errorMessage, [currentField]: error.errors[0] });
      });
  };

  // 1d
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`https://reqres.in/api/users`, formValues)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <MemberForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        value={formValues}
        data={data}
      />
    </div>
  );
}

export default App;

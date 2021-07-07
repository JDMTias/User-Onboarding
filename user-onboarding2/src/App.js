import React, { useState, useEffect } from "react";
import "./App.css";
import MemberForm from "./Form";
import axios from "axios";
import formSchema from "./Validation";
import * as yup from "yup";
import User from './User'

const initialFormValues = {
  personName: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  personName: "",
  email: "",
  password: "",
  tos: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  // states
  // 1b
  const [formValues, setFormValues] = useState(initialFormValues);
  // 1d
  const [data, setData] = useState([]);
  // 2e
  const [errorMessage, setError] = useState({});

  const [disabled, setDisabled]=useState(initialDisabled)
  // helpers
  // 1d
  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((response) => {
        setData([...data, response.data]);
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setFormValues(initialFormValues);
      });
  };
  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // event handlers
  // 1c
  const onInputChange = (event) => {
    // 2c
    const currentField = event.target.name;
    const value = event.target.value;
    // 2d
    yup
      .reach(formSchema, currentField)
      .validate(value)
      // 2f
      .then((response) => {
        setError({ ...errorMessage, [currentField]: response.errors });
      })
      .catch((error) => {
        setError({ ...errorMessage, [currentField]: error.errors[0] });
      });
    // 1c
    setFormValues({ ...formValues, [currentField]: value });
  };

  const onCheckboxChange = (event) => {
    const { name, checked } = event.target;
    yup
      .reach(formSchema, name)
      .validate(checked)

      .then(() => {
        setError({
          ...errorMessage,
          [name]: "",
        });
      })
      .catch((err) => {
        setError({
          ...errorMessage,
          [name]: err.errors[0],
        });
      });
      setFormValues({ ...formValues, [name]: checked });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      personName: formValues.personName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewUser(newUser)
  };

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <MemberForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        value={formValues}
        data={data}
        disabled={disabled}
        onCheckboxChange={onCheckboxChange}
        // 2g
        errorMessage={errorMessage}
      />
      {data.map(user =>{
        return(
         <User key={user.id} details={user}/>)
      })}
    </div>
  );
}

export default App;

import React from "react";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";


const LoginValidation = object().shape({
  email: string().required("Required").email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
});

const Input = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  
  return (
    <div>
      <label  for={field.name}>
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched ? "border-red-500" : ""
        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
      />
    </div>
  );
};

function LoginForm() {
    const navigate = useNavigate();
  const handleSubmit = (values) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "ARRAffinity=e245fb473b6d332c001dbe5a72d937b779d79d99a62fb1f9e3d8187db594d7e9; ARRAffinitySameSite=e245fb473b6d332c001dbe5a72d937b779d79d99a62fb1f9e3d8187db594d7e9");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", values.email);
    urlencoded.append("password", values.password);
    urlencoded.append("client_id", "web-dashboard");
    urlencoded.append("client_secret", "SuperSecretPassword");
    urlencoded.append("scope", "openid profile role email adminApi mobileApi offline_access");
    urlencoded.append("grant_type", "password");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://edeaf-api-staging.azurewebsites.net/connect/token", requestOptions)
      .then(response => response.json())
      .then(result => {
          navigate('/home', {state: {token: result.access_token}})
      })
      .catch(error => console.log('error', error));
    console.log(values);


};



  return (
    <div>
        <h1>Login Page</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
      >
        {() => {
          return (
            <Form>
              <Input name="email" label="Email:" />
              <Input name="password" label="Password:" type="password" />
              <div>
                <button
                  className="submin-btn"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
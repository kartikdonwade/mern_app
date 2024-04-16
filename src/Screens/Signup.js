import React,{useState} from "react";


import { Link } from "react-router-dom";
export default function Signup() {
  const [cred, setcred] = useState({name:"",email:"",password:"",location:""});
  console.log(cred);
  const handleSubmit = async (e) => {
  e.preventDefault();
    // const response = fetch("http://localhost:5000/api/user",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({name:cred.name,email:cred.email,password:cred.password,location:cred.location
    //   })
    //   const JSON = await response.JSON();
    //   console.log(JSON);
    // })
const response =await fetch("http://localhost:5000/api/createuser", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "bala",
    email: "kartik1@gmail.com",
    password: "123789",
    location: "punA",
  }),
});
console.log(response);
const data = await response.json();
if(!data.success) {
  alert("Wrong credentials");
  }
}
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              name="name"
              value="cred.name"
            >
              Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              name="email"
              value="cred.email"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              name="password"
              value="cred.password"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              name="location"
              value="cred.location"
            >
              Location
            </label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="btn btn-danger m-3">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}

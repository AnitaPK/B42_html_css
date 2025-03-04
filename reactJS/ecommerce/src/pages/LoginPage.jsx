import React, { useState } from "react";
import formIamge from "../assets/formImage.jpg";

const LoginPage = () => {
    const [email,setEmail] = useState('asd')
    const [password, setPassword] = useState('123')


function handleFormData(){
    const payload = {email:email, password:password}
    console.log(payload);
    setEmail('')
    setPassword('')
}
function handleFormSubmit(event){
    event.preventDefault();
    const payload = {email:email, password:password}
    console.log(payload);

}
console.log(email, password);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={formIamge} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit By Form
            </button>
            <button className="btn btn-primary" onClick={handleFormData}>
              Submit By On Click
            </button>
          </form>
        </div>
      </div>
      <p>Email : {email}</p>
      <p>Password:{password}</p>
    </div>
  );
};

export default LoginPage;

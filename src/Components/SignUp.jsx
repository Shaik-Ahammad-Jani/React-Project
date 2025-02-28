import React from "react";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { image6 } from "../assets/images";
library.add(faUser, faEnvelope, faLock, faPhone);
const SignUp = () => {
  const [data, setdata] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: '',
  });
  const handleChange = (e) =>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <div className="container">
      <div className="signup-image">
          <img src={image6} alt="Signup Illustration" height={500} width={500} />
        </div>
      <form action="" onSubmit={handleSubmit}>
        <h2 className="signup">SignUp</h2>
        <div className="input-field">
        <FontAwesomeIcon icon={faUser} className="icons" />
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={data.name}
            placeholder="Name"
            className="input"
          />
        </div>
        <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} className="icons" />
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
            placeholder="Email"
            className="input"
          />
        </div>
        <div className="input-field">
        <FontAwesomeIcon icon={faPhone} className="icons" />
          <input
            type="text"
            onChange={handleChange}
            name="number"
            value={data.number}
            placeholder="contact number"
            className="input"
          />
        </div>
        <div className="input-field">
        <FontAwesomeIcon icon={faLock} className="icons" />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={data.password}
            placeholder="password"
            className="input"
          />
        </div>
        <div className="input-field">
        <FontAwesomeIcon icon={faLock} className="icons" />
          <input
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="confirmPassword"
            className="input"
          />
        </div>
        <div className="have-account">
          <p>
          <Link to="/Login">Already have an account? Login</Link>
          </p>
        </div>
        
        <input type="submit" className="btn1" value='SignUp' />
      </form>
      </div>
    </div>
  );
};

export default SignUp;
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// const SignUp = () => {
//   return (
//     <section className="vh-100" style={{ backgroundColor: "#eee" }}>
//       <div className="container h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-lg-12 col-xl-11">
//             <div className="card text-black" style={{ borderRadius: "25px" }}>
//               <div className="card-body p-md-5">
//                 <div className="row justify-content-center">
//                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                       Sign up
//                     </p>
//                     <form className="mx-1 mx-md-4">
//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <label className="form-label" htmlFor="name">
//                             Your Name
//                           </label>
//                           <input type="text" id="name" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <label className="form-label" htmlFor="email">
//                             Your Email
//                           </label>
//                           <input type="email" id="email" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <label className="form-label" htmlFor="password">
//                             Password
//                           </label>
//                           <input type="password" id="password" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <label className="form-label" htmlFor="confirmPassword">
//                             Repeat your password
//                           </label>
//                           <input type="password" id="confirmPassword" className="form-control" />
//                         </div>
//                       </div>
//                       <div className="form-check d-flex justify-content-center mb-5">
//                         <input
//                           className="form-check-input me-2"
//                           type="checkbox"
//                           value=""
//                           id="terms"
//                         />
//                         <label className="form-check-label" htmlFor="terms">
//                           I agree to all statements in <a href="#!">Terms of service</a>
//                         </label>
//                       </div>
//                       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                         <button type="button" className="btn btn-primary btn-lg">
//                           Register
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                   <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                       className="img-fluid"
//                       alt="Sample"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;


import React, { useContext } from "react";

import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const { creatUser } = useContext(AuthContext);
  const handleSighUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    console.log(newUser);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Sign Up Successfully",
          text: "Coooooool",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero -mt-10 min-h-screen bg-base-200">
      <div className="hero-content flex justify-between ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSighUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name "
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign UP"
              />
            </div>
          </form>
          <p className="ml-4 mb-4">
            Already Have an Account{" "}
            <Link to={"/login"} className="text-red-600 font-bold">
              Log in
            </Link>
          </p>
        </div>
        <div className=" w-1/2 mr-16 ">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

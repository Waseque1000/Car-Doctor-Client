import React from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="hero min-h-screen -mt-14 bg-base-200">
      <div className="hero-content flex justify-between ">
        <div className=" w-1/2 mr-16 ">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form className="card-body">
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="ml-4 mb-4">
            New to Car Doctor ?{" "}
            <Link to={"/signup"} className="text-red-600 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from "react";
import logimg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
const Login = () => {
  // ?
  const { login } = useContext(AuthContext);

  const location = useLocation();
  const Navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // ?
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(newUser);
    login(email, password)
      .then((result) => {
        const user = result.user;
        //
        const loggedUser = {
          email: user.email,
        };
        console.log(user);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt responce", data);

            // TODO:  ai token ta local storage a set korte hbe ...
            // ? and this is not the best way
            // TODO:

            localStorage.setItem("car-access-token", data.token);
            Navigate(from, { replace: true });
          });

        // ? sweet alert
        Swal.fire({
          title: "log In Successfully",
          text: "Coooooool",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen -mt-14 bg-base-200">
      <div className="hero-content flex justify-between ">
        <div className=" w-1/2 mr-16 ">
          <img src={logimg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleLogin} className="card-body">
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

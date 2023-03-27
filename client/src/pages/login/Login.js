import React, { useEffect, useState } from 'react'
import './login.css'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../redux/actions/authActions'



const Login = () => {

  const [info , setInfo] = useState({
    email : "" ,
    Password : ""
  })

  const dispatch = useDispatch()
  const auth = useSelector(state=>state.authReducer)

  const navigate = useNavigate()

  
  useEffect(()=>{
    if (auth.isAuth === true) {
      navigate('/Profile')
    }
  },[navigate,auth.isAuth])
  
  
  const handleChange = (e) => {
    setInfo({...info,[e.target.name]:e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(info))
  }

  


  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="data:image/png;base64,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"
                className="img6"
                alt="Sample "
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="sin">Sign in with :</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address :
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password :
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Enter password"
                    name="Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register">
                      {" "}
                      <span className="link-warning">Register</span>{" "}
                      <p className="no9ta">.</p>
                    </Link>{" "}
                  </p>
                  <button
                    type="button"
                    className="btn-warning"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleLogin}
                  >
                    {" "}
                    {auth && auth.isLoading ? "Loading" : "Login"}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="img4"></div>
      </section>
    </div>
  );
}

export default Login
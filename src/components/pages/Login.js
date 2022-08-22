import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import "../../assets/css/login.css";
import logo from "../../assets/logo.png";

import axios from "../../api/axios";
const LOGIN_URL = "/auth/sign_in";

const Login = () => {

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/therapist";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === 'therapist' && pwd === 'therapist') {
      navigate("/therapist", { replace: true });
    } else {
      setErrMsg('Login Failed');
    }
  };

  return (
    <>
      <div className="text-center loginForm">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <img className="mb-2" src={logo} alt="" width="75" height="75" />
            <h1 className="h1 mb-6 mt-0 fw-bold fs-6">SpeechAssist</h1>
            <h1 className="p mt-4 fs-3 mb-6 fw-normal">LOGIN</h1>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            {/* <h1 className="h3 mb-3 fw-normal">Please log in</h1> */}

            <div className="form-floating mt-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="floatingInput" id="username">
                Username
              </label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />

              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btnSize" type="submit">
              Log in
            </button>

            <hr className="mt-4" />
          </form>

          <div>
            <p className="mt-4 mb-3 text-normal">
              Don't have an account?&nbsp;
              <span className="line">
                <Link to="/register" className="moveToRegister">
                  Register
                </Link>
              </span>
            </p>
          </div>

          <div>
            <p className="mt-2 mb-3 text-muted">SpeechAssist &copy; 2022</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;

import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/login.css";
import "../../assets/css/register.css";
import logo from "../../assets/logo.png";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/therapist";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [fullName, setFullName] = useState("");
  const [mediId, setMediId] = useState("");
  const [telNo, setTelNo] = useState("");
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          username: user,
          password: pwd,
          fullName: fullName,
          mediId: mediId,
          phoneNo: telNo,
          email: email,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("ss");
      console.log(response?.data);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/">Sign In</Link>
          </p>
        </section>
      ) : (
        <div className="text-center mt-4">
          <main className="form-signin">
            <form onSubmit={handleSubmit}>
              <img
                className="mb-1"
                src={logo}
                alt=""
                width="150"
                height="150"
              />
              <h1 className="h1 mb-3 mt-0 fw-bold">SpeechAssist</h1>
              <h1 className="h5 mb-3 fw-normal">Create an account</h1>
              {/* error msg */}
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingFullname"
                  placeholder="Full Name"
                  required
                  autoComplete="off"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label htmlFor="floatingFullname">Full Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingMedicalId"
                  placeholder="Medical ID"
                  required
                  autoComplete="off"
                  value={mediId}
                  onChange={(e) => setMediId(e.target.value)}
                />
                <label htmlFor="floatingMedicalId">Medical ID</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  ref={userRef}
                  className="form-control"
                  id="floatingInput"
                  placeholder="Username"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  value={user}
                  autoComplete="off"
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <label htmlFor="floatingInput">
                  Username
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </label>
              </div>


              <span>
              <table>
                <tr>
                  <th>
                  <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingTelno"
                    placeholder="Tel no"
                    required
                    autoComplete="off"
                    value={telNo}
                    onChange={(e) => setTelNo(e.target.value)}
                  />
                  <label htmlFor="floatingTelno">Telephone Number</label>
                  </div>
                  </th>
                  <th>
                  <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div> 
                  </th>
                </tr>
              </table>
 

              </span>


              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">
                  Password{" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validPwd || !pwd ? "hide" : "invalid"}
                  />
                  <p
                    id="pwdnote"
                    className={
                      pwdFocus && !validPwd ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingConfirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  autoComplete="off"
                />
                <label htmlFor="floatingConfirmPassword">
                  Confirm Password{" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                  <p
                    id="confirmnote"
                    className={
                      matchFocus && !validMatch ? "instructions" : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                  </p>
                </label>
              </div>

              <button
                disabled={!validName || !validPwd || !validMatch ? true : false}
                className="mt-3 btnSize btn btn-lg btn-primary"
                type="submit"
              >
                Sign Up
              </button>

              <hr className="mt-4" />
            </form>

            <p className="mt-4 mb-3 text-normal">
              Already have an account?&nbsp;
              <span className="line">
                {/*put router link here*/}
                <Link to="/" className="moveToRegister">
                  Sign In
                </Link>
              </span>
            </p>
            <p className="mt-5 mb-3 text-muted">SpeechAssist &copy; 2022</p>
          </main>
        </div>
      )}
    </>
  );
};

export default Register;

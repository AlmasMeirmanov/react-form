import React, { useState } from "react"
import validator from "validator"

export default props => {
  const [fullname, setFullname] = useState("")
  const [fullnameError, setFullnameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [confirmpasswordError, setConfirmpasswordError] = useState("")
  const [url, setUrl] = useState("")
  const [urlError, setUrlError] = useState("")

  function checkSubmit(e) {
    e.preventDefault()

    let valid = true

    if (fullname === "") {
      valid = false
      setFullnameError("Cannot be blank")
    } else {
      setFullnameError("")
    }
    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("Must be valid email")
    } else {
      setEmailError("")
    }
    if (username === "") {
      valid = false
      setUsernameError("Cannot be blank")
    } else {
      setUsernameError("")
    }
    if (password === "") {
      valid = false
      setPasswordError("Cannot be blank")
    } else {
      setPasswordError("")
    }
    if (confirmpassword != password) {
      valid = false
      setConfirmpasswordError("Must match the password")
    } else {
      setConfirmpasswordError("")
    }
    if (!validator.isURL(url)) {
      valid = false
      setUrlError("Must be a valid url")
    } else {
      setUrlError("")
    }
    if (valid) {
      props.history.push("/Thankyou")
    } else {
      alert("nope")
    }
  }
  return (
    <div className="box">
      <header>Profile Form - All fields required</header>
      <form onSubmit={checkSubmit}>
        <div className="name">
          <label className={fullnameError ? "error" : ""} htmlFor="fullname">
            Name {fullnameError && fullnameError}
          </label>
          <br></br>
          <input
            type="text"
            id="fullname"
            placeholder="Michael"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
          ></input>
        </div>
        <div className="email">
          <label className={emailError ? "error" : ""} htmlFor="email">
            Email {emailError && emailError}
          </label>
          <br></br>
          <input
            type="email"
            id="email"
            placeholder="email@test.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="username">
          <label className={usernameError ? "error" : ""} htmlFor="username">
            Username {usernameError && usernameError}
          </label>
          <br></br>
          <input
            type="text"
            id="username"
            placeholder="Myusername"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="password">
          <label className={passwordError ? "error" : ""} htmlFor="pwd">
            Password {passwordError && passwordError}
          </label>
          <br></br>
          <input
            type="password"
            id="pwd"
            placeholder="..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="cpassword">
          <label
            className={confirmpasswordError ? "error" : ""}
            htmlFor="confirmpassword"
          >
            Confirm Password{confirmpasswordError && confirmpasswordError}
          </label>
          <br></br>
          <input
            type="password"
            id="confirmpassword"
            placeholder="..."
            value={confirmpassword}
            onChange={e => setConfirmpassword(e.target.value)}
          ></input>
        </div>
        <div className="url">
          <label className={urlError ? "error" : ""} htmlFor="url">
            Url{urlError && urlError}
          </label>
          <br></br>
          <input
            type="text"
            id="website"
            placeholder="http//mywebsite.com"
            value={url}
            onChange={e => setUrl(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

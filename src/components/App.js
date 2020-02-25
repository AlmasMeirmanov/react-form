import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Form from "./Form"
import Thankyou from "./Thankyou"

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Form} />
        <Route path="/Thankyou" component={Thankyou} />
      </div>
    </Router>
  )
}

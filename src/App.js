import React from 'react'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import SignUp from './SignUp'
 
const func1=()=>{
  if(window.location.pathname==='/Dashboard.js')
    return<Dashboard/>
}
const func2=()=>{
  if(window.location.pathname==='/SignIn.js')
    return<SignIn/>
}
const func3=()=>{
  if(window.location.pathname==='/')
    return<SignUp/>
}
const App = () => {
  return (
    <div>
    {func1()}
    {func2()}
    {func3()}
    </div>
  )
}

export default App
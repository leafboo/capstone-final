import { Link } from "react-router"

function Login() {


  return (
    <>
      <h1 className="text-green-900 font-bold text-[3rem]">Login Page</h1>
      <Link to="/dashboard" className="border border-black p-[.5rem]">Log in</Link>
      <Link to="/signup" className="border border-black p-[.5rem]">Make an account</Link>
    </>
  )
}

export default Login
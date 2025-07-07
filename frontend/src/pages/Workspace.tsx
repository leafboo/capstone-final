import { Link } from "react-router"

function Workspace() {


  return (
    <>
      <h1 className="text-green-900 font-bold text-[3rem]">Workspace</h1>
      <Link to="/dashboard" className="border border-black p-[.5rem]">Go back</Link>
    </>
  )
}

export default Workspace
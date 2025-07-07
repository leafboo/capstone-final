import { Link } from "react-router"

function Dashboard() {


  return (
    <>
      <h1 className="text-green-900 font-bold text-[3rem]">User Dashboard Page</h1>
      <Link to="/workspace" className="border border-black p-[.5rem]">Go to workspace</Link>
      <Link to="/" className="border border-black p-[.5rem]">Log out</Link>
    </>
  )
}

export default Dashboard
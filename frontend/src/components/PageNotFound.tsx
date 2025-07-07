import notFound404 from "../assets/404.jpg"

function PageNotFound() {


  return (
    <>
      <div className="flex flex-col items-center">
        <img src={notFound404} className="w-[25rem]" />
        <div className="text-[3rem] font-bold">404 Not found</div>
      </div>  
    </>
  )
}

export default PageNotFound
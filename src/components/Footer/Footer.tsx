
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center gap-3 md:justify-between items-center h-20 w-full bg-black md:px-32 absolute bottom-0 left-0 z-30">

      <div className="">
        <p>Chit-Chat 2024. All rights reserved</p>
      </div>
      <div className="flex justify-between items-center gap-10 font-bold cursor-wait">
        <p>Docs</p>
        <p>Github</p>
        <p>Twitter</p>
        <p>Discord</p>
      </div>
    </footer>
  )
}

export default Footer
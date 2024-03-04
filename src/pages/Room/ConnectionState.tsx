

const ConnectionState = ({ isConnected }: any) => {
  return(
    <div className="mx-5 my-10">
      <p>Connection with server : {isConnected ? (<span className="text-green-500">Active</span>) : (<span className="text-red-500">Lost</span>)}</p>
    </div>
  )
}

export default ConnectionState;
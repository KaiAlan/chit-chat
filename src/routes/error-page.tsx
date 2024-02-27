

export default function ErrorPage() {


  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-black">
      <h1 className="font-black text-red-600">Oops!</h1>
      <p className="font-semibold text-white">Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="font-lexend bg-bgMain bg-cover bg-no-repeat w-full transition duration-500 ease-in-out dark:text-stone-300 ">
        <div className="md:mx-auto md:w-full min-h-screen">
          <Nav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;

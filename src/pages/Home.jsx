import TopBar from "../components/TopBar";
// import finger from "../media/finger.svg";
// import click from "../media/click.svg";
import { useEffect } from "react";
import { getDataLocalStorage } from "../utils/localStorageHelper.js";
import { jwtDecode } from "jwt-decode";

export default function Home() {

  useEffect(() => {
    const token = getDataLocalStorage('token')
    const data = jwtDecode(token)
    if(data.user_type !== 'client'){
      window.location = '/'
    }
  },[])

  return (
    <>
      <div className="box-content h-dvh w-full">
        <TopBar logout={true}/>
        <div className="flex justify-center gap-y-10 flex-col items-center box-border h-57 w-full p-4 border-4">
          <div className="text-5xl">Bienvenido a</div>
          <h1 className="text-6xl font-bold text-uv-blue ">KOMALLI (Logo)</h1>
          <div className="text-5xl">Ordena Aquí </div>
        </div>
        <div className="flex justify-center items-center box-border  h-2/5 w-full p-4 border-4">
          <button className="h-24 p-4 text-5xl text-white-100 bg-uv-blue rounded-full">
            <svg
              className="h-14 w-14 inline-block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
              />
            </svg>
            <span className=""> Toca para comenzar</span>
          </button>
        </div>
      </div>
    </>
  );
}

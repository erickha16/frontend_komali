import React from "react";
import TopBar from "../components/TopBar";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { getDataLocalStorage } from "../utils/localStorageHelper";
import InfoCardUser from "../components/InfoCardUser";
import AdminOptions from "../components/AdminOptions";
import AdminCrud from "../components/AdminCrud";
import ModalCrud from "../components/ModalCrud";
import { axiosGet } from "../utils/axiosHelper";

function Admin() {
  const token = getDataLocalStorage("token");
  const data = jwtDecode(token);
  const [diningName, setDiningName] = useState();
  const [selectedCategory, setSelectedCategory] = useState("admin");
  const [selectedAction, setSelectedAction] = useState();
  const [selectedRow, setSelectedRow] = useState();

  useEffect(() => {
    const initDiningRoom = async () => {
      await getDiningRoom();
    };

    if (data.user_type !== "admin") {
      window.location = "/";
    } else {
      initDiningRoom();
    }
  }, []);

  const getDiningRoom = async () => {
    const url = `http://127.0.0.1:8000/dining-room/${data.dining_room_id}`;
    const result = await axiosGet(url, token);
    if (result !== undefined) {
      setDiningName(result.data.dining_name);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100">
      <TopBar userType="Admin" />
      <InfoCardUser
        userName={data.user_name}
        diningRoomName={diningName}
        userType={data.user_type}
      />
      <div className="flex gap-8 p-8 w-full h-4/5">
        <div className=" flex-none w-1/5">
          <AdminOptions
            userType={data.user_type}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="w-4/5 h-full">
          <AdminCrud
            setIsModalOpen={setIsModalOpen}
            selectedCategory={selectedCategory}
            setSelectedAction={setSelectedAction}
            setSelectedRow={setSelectedRow}
            selectedRow={selectedRow}
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalCrud
          setIsModalOpen={setIsModalOpen}
          selectedAction={selectedAction}
          selectedRow={selectedRow}
        />
      )}
    </div>
  );
}

export default Admin;

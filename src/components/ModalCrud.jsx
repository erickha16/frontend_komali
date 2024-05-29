import CreateForm from "../components/crud/CreateForm";
import EditForm from "../components/crud/EditForm";
import ComedorForm from "./crud/ComedorForm";
import ComedorEditForm from "./crud/ComedorEditForm";
import DeleteForm from "../components/crud/DeleteForm";

import React from "react";

const ModalCrud = ({ setIsModalOpen, selectedAction, category }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderSelectedForm = () => {
    if (category === "admin") {
      switch (selectedAction) {
        case "agregar":
          return <CreateForm />;
        case "modificar":
          return <EditForm />;
        case "eliminar":
          return <DeleteForm />;
        default:
          console.log("tilin");
      }
    } else if (category === "comedores") {
      switch (selectedAction) {
        case "agregar":
          return <ComedorForm />;
        case "modificar":
          return <ComedorEditForm />;
        case "eliminar":
          return <DeleteForm />;
        default:
          console.log("tilin");
      }
    }
  };

  return (
    <div className="w-full h-full bg-gray-900 bg-opacity-50 fixed bottom-0 right-0 flex justify-center items-center text-center">
      <div className="bg-white-100 rounded-3xl h-auto w-5/12">
        <div className="relative w-full">
          <div className="flex justify-end text-xl pr-6 font-bold absolute -top-1 right-0 mt-2">
            <button
              className="text-uv-blue"
              onClick={() => {
                closeModal();
              }}
            >
              X
            </button>
          </div>
        </div>
        <div>{renderSelectedForm()}</div>
      </div>
    </div>
  );
};

export default ModalCrud;

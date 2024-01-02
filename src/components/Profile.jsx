import { useState } from "react";
import ProfileModal from "./ProfileModal";

export const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container-g">
        <ProfileModal isOpen={isModalOpen} onRequestClose={closeModal} />

        <i onClick={openModal} className="fa-regular fa-pen-to-square tal"></i>
        <h1 className="title-data-profile">Dados da conta</h1>
        <hr className="line" />

        <div className="container-dashboard-profile">
          <div className="col-1">
            <div className="content-side-1">
              <h4 className="text"><i className="fa-regular fa-eye"> &nbsp;</i>Exibido para todos</h4>
              <h4 className="text space">Primeiro nome</h4>
              <h4 className="text space">Último nome</h4>
              <hr className="line" />
              <h4 className="text"><i className="fa-regular fa-eye-slash"> &nbsp;</i>Exibido apenas para você</h4>
              <h4 className="text space">Celular</h4>
              <h4 className="text space">Email</h4>
              <h4 className="text space">CPF</h4>
              <h4 className="text space">RG</h4>
              <h4 className="text space">Data de nascimento</h4>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text"><i className=""> &nbsp;</i></h4>
            <h4 className="text space">Gustavo</h4>
            <h4 className="text space">Batista</h4>
            <hr className="line" />
            <h4 className="text"><i className=""> &nbsp;</i></h4>
            <h4 className="text space">(73) 98195-7754</h4>
            <h4 className="text space">gustavobatistadev@gmail.com</h4>
            <h4 className="text space">101.765.987-12</h4>
            <h4 className="text space">2065445687</h4>
            <h4 className="text space">11/02/1990</h4>
          </div>
        </div>
      </div>
    </>
  );
};

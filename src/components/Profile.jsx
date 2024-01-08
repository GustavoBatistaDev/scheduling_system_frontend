import { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import { updateProfileUser } from "../services/user_profile/updateUserData.service";
import { getDataProfileUser } from "../services/user_profile/getDataProfileUser.service";
import { toast } from "react-toastify";

export const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dataUser, setDataUser] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem('userData', JSON.stringify(dataUser));
    }
  }, [dataUser]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await getDataProfileUser();
          
        setDataUser(initialData.data)
     
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  
  const clearCPF =(cpf) => {
    // Remove pontos e hífens
    return cpf.replace(/[.-]/g, '');
  }


  const updateDataProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const objectProfile = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      cpf: clearCPF(formData.get('cpf')),
      rg: formData.get('rg'),
      date_of_birth: formData.get('date_of_birth'),
      phone: formData.get('phone'),
    };

  try {
    await updateProfileUser(objectProfile);

    const updatedDataUser = await getDataProfileUser();
    console.log(updatedDataUser)
    setDataUser(updatedDataUser.data); // Atualiza o estado com os dados mais recentes

    toast.success('Dados atualizados com sucesso.');
    closeModal();

  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <div className="container-g">
        <ProfileModal dataUser={dataUser} setDataUser={setDataUser} onSubmiFunction={updateDataProfile} isOpen={isModalOpen} onRequestClose={closeModal} />

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
            <h4 className="text space">{dataUser?.first_name}</h4>
            <h4 className="text space">{dataUser?.last_name}</h4>
            <hr className="line" />
            <h4 className="text"><i className=""> &nbsp;</i></h4>
            <h4 className="text space">{dataUser?.phone}</h4>
            <h4 className="text space">{dataUser?.email}</h4>
            <h4 className="text space">{dataUser?.cpf}</h4>
            <h4 className="text space">{dataUser?.rg}</h4>
            <h4 className="text space">{dataUser?.date_of_birth}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

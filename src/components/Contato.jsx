export const Contato = () => {
    return (
        <>
            <div style={{borderRadius: '0'}} className="chat">
            <header className="chat-header">
                   <div className="container-header" style={{position: 'fixed'}}>
                    <img className="logo-chat-header" src="/logoo.jpg" alt="" />
                    &nbsp;<h4 style={{marginTop: '-10px'}}>Contato</h4>
                    <div className="online" >
                        <img height="8" src="/Ellipse 15.svg" alt="" />
                         &nbsp;<span style={{fontSize: '12px'}}>Online</span>
                     </div>
                   </div>
            </header>
            <div style={{zIndex: 2}} className="body-messages">
                <div  className="message-secretary">
                    <p className="text">Olá, tudo bem?</p>
                </div>
                <div  className="message-user">
                    <p className="text">Tudo bem, sim! E você? Estou querendo marcar uma consulta, seria possível?</p>
                    
                </div>
                
                <div  className="message-secretary">
                    <p className="text">É sim, você pode acessar a seção Agenda do nosso sistema e agendar a sua consulta!</p>
                </div>
                    <div  className="message-user">
                    <p className="text">Ah, ok! Obrigado!</p>
                </div>
                <div  className="message-secretary">
                    <p className="text">Por nada! Tenha uma boa tarde.</p>
                </div>
            </div>
            
        </div>
        <div className="espaco">

        </div>
  
        <div className="">
            <div className="container-input-chat">
                <div className="container-icon input-chat">
                    <input className="input-transparent" type="text" placeholder="Escreva aqui..." />
                    <i style={{cursor: 'pointer'}} className="fa-regular fa-paper-plane"></i>
                </div>
            </div>
        </div>
        </>
    );
};
import './perfil.css';

import { useState, useRef } from 'react';
import NavItem from '../components/NavItem/NavItem'
import Story from '../components/Story/Story'
import { faker } from "@faker-js/faker";
import InfoPerfil from '../components/infoPerfil/infoPerfil'
import mas from '../assets/mas.png'
import OpcionesPost from '../components/OpcionesPost/OpcionesPost'
import Modal from '../components/modals/Modal';
import ModalConPortal from '../components/modals/ModalConPortal';
import luis1 from '../assets/luis1.png'
import luis2 from '../assets/luis2.png'
import PostPerfil from '../components/PostPerfil/PostPerfil'
import  { Footer2,Footer } from '../components/footer/footer'
import RoutesWrapper from '../router/enrutador';
const Historias = [
    {
      usuario: "Messi",
      foto: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg'
    },
    {
      usuario: "D A N C E",
      foto: 'https://www.realmadrid.com/img/vertical_380px/cristiano_550x650_20180917025046.jpg'
    },
    {
      usuario: "Santa Rita",
      foto: 'https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1'
    },
    
    ]
  const nav = [
    {
      nombre: 'Inicio',
      icono: "./src/img/Home.svg"
    },
    {
      nombre: 'Buscar',
      icono: "./src/img/Search.svg"  },
    {
      nombre: 'Explorar',
      icono: "./src/img/Explore.svg"  },
    {
      nombre: 'Reels',
      icono: "./src/img/Reels.svg"  },
    {
      nombre: 'Mensajes',
      icono: "./src/img/Messages.svg"  },
    {
      nombre: 'Notificaciones',
      icono: "./src/img/Like.svg"  },
    {
      nombre: 'Crear',
      icono: "./src/img/New post.svg"  },
    {
      nombre: 'Perfil',
      icono: "./src/img/Profile.svg"  },
    {
      nombre: 'Más',
      icono: "./src/img/Union.svg"  }
  ]
  const PostsPerfil = [
    {
      foto: faker.image.urlLoremFlickr()
    },
    {
      foto: faker.image.urlLoremFlickr()
    },
    {
      foto: faker.image.urlLoremFlickr()
    },
    {
      foto: faker.image.urlLoremFlickr()
    },
    {
      foto: faker.image.urlLoremFlickr()
    },
    {
      foto: faker.image.urlLoremFlickr()
    }
  ]
  const itempiedePagina = [
    {
      nombreItem: 'Meta'
    },
    {
      nombreItem: 'Información'
    },
    {
      nombreItem: 'Blog'
    },
    {
      nombreItem: 'Empleo'
    },
    {
      nombreItem: 'Ayuda'
    },
    {
      nombreItem: 'API'
    },
    {
      nombreItem: 'Privacidad'
    },
    {
      nombreItem: 'Condiciones'
    },
    {
      nombreItem: 'Ubicaciones'
    },
    {
      nombreItem: 'Instagram Lite'
    },
    {
      nombreItem: 'Threads'
    },
    {
      nombreItem: 'Subir contactos y no usuarios'
    },
    {
      nombreItem: 'Meta verified'
    },
  ]
  const idiomaCopyright = [
    {
      nombre: 'Español'
    },
    {
      nombre: '© 2023 Instagram from Meta'
    },
  ]
  
  
  

function Perfil (){
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const mostrarModalNormal = false;
return (
    <>
    {mostrarModalNormal ? (
        <div className="normal-modal-container">
         <PostPerfil action={openModal}/>
          <Modal isOpen={modalIsOpen} onClose={closeModal} ref={modalRef} />
        </div>
      ) : (
        <div className="portal-modal-container">
          <ModalConPortal />
        </div>
      )}

      {/*<h2>Ejemplo de Referencia</h2>
      <EjemploRef />*/}
    
 
      <div className="barraNavegacion">
    <div className="opcionesNavegacion">
        
        <div className="logo"></div>
     
       
        
     
      { nav.map((item)=>
           <NavItem action={item.nombre}
           icon={item.icono}
            />)}
      </div></div>
<div className="general">
  
      <div className="ladoDerecho">
      <div className="otro">
     <InfoPerfil/>
      </div>

      <div className= 'Historias'>
        <div className="itemHistorias perfil">
    { Historias.map((item)=>
           <Story  username={item.usuario} 
            image={item.foto}/>)}
    </div></div>
    <div className="opPost">
      <OpcionesPost/>
    </div>
    <div className="contenedorPosts">
    { PostsPerfil.map((item)=>
    <div id="post">
           <PostPerfil photo={item.foto} 
            /></div> )}
    </div>
    <div className="piedePagina">
    <div className="primero">
      { itempiedePagina.map((item)=>
       <Footer itemFooter={item.nombreItem}/>
           )}
</div>
<div className="segundo">
   { idiomaCopyright.map((item)=>
       <Footer2 otrosItem={item.nombre}/>
           )}
</div>
          
    </div>
    </div>
    
    
 </div>
 </>
 )
 }

 export default Perfil;
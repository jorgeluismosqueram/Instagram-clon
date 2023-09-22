
import './Home.css'


import NavItem from '../components/NavItem/NavItem'
import Story from '../components/Story/Story'
import { faker } from "@faker-js/faker";
import InfoPerfil from '../components/infoPerfil/infoPerfil'
import mas from '../assets/mas.png'
import OpcionesPost from '../components/OpcionesPost/OpcionesPost'

import luis1 from '../assets/luis1.png'
import luis2 from '../assets/luis2.png'
import PostPerfil from '../components/PostPerfil/PostPerfil'
import  { Footer2,Footer } from '../components/footer/footer'
import PostContainer from '../components/PostContainer/Postcontainer';
import { Sugerencias, InfoUsersySugerencias  } from '../components/InfoUsersySugerencias/InfoUsersySugerencias';
const Historias = [
    {
      usuario: faker.person.firstName(),
      foto: faker.image.avatar()
    },
    {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
    },
    {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
    },
    {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
    },
    {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
      },
      {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
      },
      {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
      },
      {
        usuario: faker.person.firstName(),
        foto: faker.image.avatar()
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
      foto: luis1
    },
    {
      foto: luis2
    },
    {
      foto: luis2
    },
    {
      foto: luis1
    },
    {
      foto: luis1
    },
    {
      foto: luis2
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
    }
  ]
 
  const sugerencias = [
    {foto: faker.image.avatar(),
      usuario: faker.person.lastName(),
      nombre: faker.person.fullName()
    },
    {foto: faker.image.avatar(),
      usuario: faker.person.lastName(),
      nombre: faker.person.fullName()
    },
    {foto: faker.image.avatar(),
      usuario: faker.person.lastName(),
      nombre: faker.person.fullName()
    },
    {foto: faker.image.avatar(),
      usuario: faker.person.lastName(),
      nombre: faker.person.fullName()
    }
  ];
  
function Home (){
    return(
      <>
      <div className="barraNavegacion">
    <div className="opcionesNavegacion">
      <div className="logo">
       
        </div>
     
      { nav.map((item)=>
           <NavItem action={item.nombre}
           icon={item.icono}
            />)}
      </div></div>
      <section className='todo'>
      
      <div className="general">
    
    <div className="ladoDerecho2">
    {/*<div className="otro">
   <InfoPerfil/>
    </div>*/}
<div>
    <div className= 'Historias'>
      <div className="itemHistorias">
  { Historias.map((item)=>
         <Story  username={item.usuario} 
          image={item.foto}/>)}
  </div></div></div>
  <br />
  <section>
  <div className="contenedorPost">
    <div className='Carruselabajo'>
      <div className="vertical">
      <PostContainer/>  
      </div>
  
  </div></div>
  
  </section>
 
  
  </div>
  <div className="Infousuario-sugerencias">
    <InfoUsersySugerencias username={faker.person.firstName()} profilePic={faker.image.avatar()} fullname={faker.person.fullName()}/>
  
    <div className="sugested">
    <p id='p1'>Sugerencias para ti </p>
    <p id='p2'>ver más</p>
    </div>
  { sugerencias.map((item)=>
           <Sugerencias username={item.usuario} profilePic={item.foto} fullname={item.nombre}
            />)}

<section className='foot'>
  <div className="footer">
  <div className="primero">
    { itempiedePagina.map((item)=>
     <Footer itemFooter={item.nombreItem}/>
         )}
</div>
<div className="segundo">
<Footer2 otrosItem={'© 2023 INSTAGRAM FROM META'}/>
</div>
  </div>
 
 </section>
  </div>
  
  
</div>
      </section>
     
       

  
</>
    )
}
export default Home;
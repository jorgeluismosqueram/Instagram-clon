import { faker } from "@faker-js/faker";
import './infoPerfil.css'
function InfoPerfil () {
    return (
        <div className="ladoDerecho2">
    <div className="infoPerfil">
      <div className="fotoPerfil">
        <div className="foto">
        <img src={faker.image.avatar()} alt="" />
      </div></div>
      <div className="otraInfo">
        <div className="primeraParte">
        <p>_lummo</p>
        <button className="botonPerfil">Editar perfil</button>
        <button className="botonPerfil">Ver archivo</button>
        <svg aria-label="Opciones" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Opciones</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        </div>
        <div className="segundaParte">
            <p> <span id="numeros">{Math.floor(Math.random()*1000)}</span> publicaciones</p>
            <p><span id="numeros">{Math.floor(Math.random()*1000)}</span> seguidores</p>
            <p> <span id="numeros">{Math.floor(Math.random()*1000)}</span> seguidos</p>
        </div>
        <div className="terceraParte">
            <p id="nombre">Luis Mosquera</p>
            <div id="threads"> <p >@11.055.363</p></div>
           
            <p id="infoPerfilUser">Since: Santa Rita, Río Iró, Chocó 🇬🇦</p>
            <p id="infoPerfilUser">🕺🏽👨🏽‍💻</p>
            <p id="enlace" >  <svg aria-label="Icono de enlace" class="x1lliihq x1n2onr6" color="rgb(0, 55, 107)" fill="rgb(0, 55, 107)" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Icono de enlace</title><path d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8.471" x2="15.529" y1="15.529" y2="8.471"></line></svg> www.facebook.com/Jorgeluismosqueram</p>
        </div>
      </div>
    </div>
    </div>
    )
}
export default InfoPerfil;
import './InfoUsersySugerencias.css';
import { faker } from "@faker-js/faker";
function InfoUsersySugerencias ({profilePic, username, fullname}){
    return   (
        <div className="infoUsuarioHome">
            <div className="name-photo">
            <img className='perfiles' src={profilePic}alt="" />
            <div className="username">
            <p>{username}</p>
            <p>{fullname}</p>
            <p></p>
            </div>
            </div>
            <p id='cambiar'> Cambiar</p>
            

        </div>
    )
}

function Sugerencias({fullname,username, profilePic}){
    return (
        <>
         
        <div className='sugerencias'>
                
                <div className="generalInfoSugerencia">
                <img className='perfiles' src={profilePic} alt="" />
                <div className="infoSugerencia">
                    <p>{username}</p>
                   <p >{faker.person.firstName()} y {Math.floor(Math.random()*1000)} siguen esta cuenta</p> 
                    <p></p>
                </div>
                <div className="follow">
                    <p>Follow</p>
                </div></div>
            </div>
        </>
       
    )

}
export {InfoUsersySugerencias, Sugerencias} ;
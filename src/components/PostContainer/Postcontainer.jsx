import Post from "../Post/Post";
import { faker } from "@faker-js/faker";
import luis1 from '../../assets/luis1.png'
const post = [
    {
        usuario:faker.person.firstName(),
        nombre: faker.person.firstName(),
        foto: faker.image.urlPicsumPhotos(),
        fotoperfil: faker.image.avatar(),
        ubicacion: faker.location.city(),
        fraseX: 'lalalal'
    },
    {
        usuario:faker.person.firstName(),
        nombre: faker.person.firstName(),
        foto: faker.image.urlPicsumPhotos(),
        fotoperfil: faker.image.avatar(),
        ubicacion: faker.location.city(),
        fraseX: 'lalalal'
    },
    {
        usuario:faker.person.firstName(),
        nombre: faker.person.firstName(),
        foto: faker.image.urlPicsumPhotos(),
        fotoperfil: faker.image.avatar(),
        ubicacion: faker.location.city(),
        fraseX: 'lalalal'
    },
    {
        usuario:faker.person.firstName(),
        nombre: faker.person.firstName(),
        foto: faker.image.urlPicsumPhotos(),
        fotoperfil: faker.image.avatar(),
        ubicacion: faker.location.city(),
        fraseX: 'lalalal'
    },
    {
        usuario:faker.person.firstName(),
        nombre: faker.person.firstName(),
        foto: faker.image.urlPicsumPhotos(),
        fotoperfil: faker.image.avatar(),
        ubicacion: faker.location.city(),
        fraseX: 'lalalal'
    },
]
function PostContainer(){
    return(
        post.map((item)=>
        <Post
        key={item.usuario}
        username={item.usuario}
        location={item.ubicacion}
        name= {item.nombre}
        photo={item.foto}
        ProfilePic={item.fotoperfil} 
        frase={item.fraseX}/>
        )
    )
    
}
export default PostContainer;
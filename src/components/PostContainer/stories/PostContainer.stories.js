import PostContainer from "../Postcontainer";
import { faker } from "@faker-js/faker";

export default{
    title: "Post Container",
    component: PostContainer
}

const PostGenerator = (cantidad)=>{
    return(
        Array.from(Array(cantidad)).map(()=>({
            username: faker.person.firstName(),
            name: faker.person.fullName(),
            photo: faker.image.urlPicsumPhotos(),
            ProfilePic: faker.image.avatar(),
        }))
    )
   
}

export const PostContainerStorys ={
    args:{
        posts: PostGenerator(10)
    }
}
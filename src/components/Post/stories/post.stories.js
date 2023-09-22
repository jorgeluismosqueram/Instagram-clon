import Post from "../Post";
import { faker } from "@faker-js/faker";

//configuración
export default{
    title: "Post/ Un solo posts",
    component: Post
}


//complemento como tal
export const Insta_Story = {
args:{
    username: faker.person.firstName(),
    name: faker.person.fullName(),
    photo: faker.image.urlPicsumPhotos(),
    ProfilePic: faker.image.avatar(),
}
}
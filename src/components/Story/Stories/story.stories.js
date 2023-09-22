import Story from "../Story";
import { faker } from "@faker-js/faker";

export default{
    title: "Instagram Stories",
    component: Story,
    argTypes: {
        variaciones: {
            control: 'select',
            options: ["closeFriends",
            "noVisto",
            "Visto"
        ]
        }
    }

}
 //variaciones
 //1. CloseFriends - borde verde
 //2. noVista - rosado
// 3. Visto - white

 export const Instagram_Stories = {
    args:{
        username: faker.person.lastName(),
        image: faker.image.avatar(),
        variaciones: "closeFriends"
    }
    
}


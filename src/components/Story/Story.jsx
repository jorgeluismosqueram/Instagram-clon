import "./Story.css";
import { faker } from "@faker-js/faker";


function Story({username, image, variaciones}){
  return (
    <div className="story">
     <div className="imagenHistoria">
     <img  src={image} alt="" />
     </div>
    
     <p>{username}</p>
    </div>
  );
}

export default Story;
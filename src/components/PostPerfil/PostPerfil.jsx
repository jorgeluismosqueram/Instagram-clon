import './PostPerfil.css'


function PostPerfil({photo, action}){
    return (
       
            <div onClick={action} className="Post-image">
                <div   className="Post-image-bg">
                    <img alt="Icon Living" src={photo} />
                </div>
            </div>

        
    )
}
PostPerfil.prototype ={
    action: ()=>{}
}
export default PostPerfil;
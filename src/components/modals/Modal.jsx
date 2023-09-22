import {  useRef } from "react";
import Post from "../Post/Post";
import { faker } from "@faker-js/faker";

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    const closeModal = () => {
        //cerrado por referencia
        modalRef.current.style.display = 'none';
        //cerrado con manejo de estado
        onClose();
    };
  

    return isOpen && (<div className="modal-overlay" ref={modalRef}>
        <div className="modal">
         <Post photo={faker.image.urlLoremFlickr()} ProfilePic={faker.image.avatar()} username={faker.person.firstName()} name={faker.person.fullName()}/>
        </div>
      </div>);
};

//tipado de las propiedades del componente
Modal.propTypes = {
    isOpen: Boolean,
    onClose: () => {}
  }

export default Modal;
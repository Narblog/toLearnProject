import React, { FC,ReactNode, useEffect, useRef } from 'react';
import styles from "./Modal.module.css"


interface ModalProps{
    children: ReactNode;
    isOpen:Boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Modal: FC<ModalProps> = ({children,isOpen,setIsOpen}) => {
  
    const modalRef=useRef<any>(null)

    const closeModal = (event: any) => {
       if(modalRef.current && !modalRef.current.contains(event.target)){
        setIsOpen(true)
       }
    }
    useEffect(() => {
        document.addEventListener("click", closeModal);
        return () => {
            document.removeEventListener("click", closeModal)
        }
    }, [])
    return (
        <>
            {
                isOpen  ? <div ref={modalRef} className={styles.modal}>{children}</div>:null
            }
        </>
    )
}

export default Modal
import React, { FC,ReactNode, useEffect, useState,useRef } from 'react';
import styles from "./Modal.module.css"


interface ModalProps{
    children: ReactNode;
    setState: React.Dispatch<React.SetStateAction<boolean>>;

  
}

const Modal: FC<ModalProps> = ({children,isOpen,setIsOpen}) => {
  
    const modalRef=useRef<any>(null)

    const closeModal = (event: any) => {
       if(modalRef.current && !modalRef.current.contains(event.target)){
        setIsOpen(false)
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
                isOpen && <div ref={modalRef} className={styles.modal}>{children}</div>
            }
        </>
    )
}

export default Modal
import React,{useState} from "react";
import Modal from "entities/Modal";
const List: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean> (false) 
    return (
        <div >
            <div className="card text-bg-light mb-3" >
                <div className="card-header">Done</div>
                <div className="card-body">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> 
                           
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <h1>Modal</h1>
                <p>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    vitae nam maxime temporibus nihil assumenda!</p>
            </Modal>
            <button onClick={()=>setIsOpen(!isOpen)} >
               
                
                 isOpen</button> 
        </div>
    )
}
export default List
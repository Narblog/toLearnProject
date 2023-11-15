import React,{useState} from "react";
import styles from "./List.module.css"
import Modal from "entities/Modal";



const List: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean> (true)
    
    return (
        <div >

            <div className="card text-bg-light mb-3" >
                <div className="card-header">Done</div>
                <div className="card-body">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">A second link item 1</a> <button > isOpen</button>
                        <a href="#" className="list-group-item list-group-item-action">A second link item 2</a>
                        <a href="#" className="list-group-item list-group-item-action">A second link item 3</a>
                        <a href="#" className="list-group-item list-group-item-action">A second link item 4</a>
                        <a href="#" className="list-group-item list-group-item-action">A second link item 5</a>
                    </div>
                </div>

            </div>

            <Modal state={isOpen} setState={setIsOpen} >
              
                <h1>Modal</h1>
                <p>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Maxime nisi culpa est ut!
                    Libero repellat voluptas quae error neque
                    sunt consequatur
                    consequuntur ipsa dolorem,
                    vitae nam maxime temporibus nihil assumenda!</p>
              
               
            </Modal>

        </div>
    )
}
export default List
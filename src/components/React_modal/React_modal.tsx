import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./React_modal.css";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function React_modal({ isOpen, children }) {
    const [modalIsOpen, setIsOpen] = React.useState<any>(false);

    function openModal(value:boolean) :void {
        setIsOpen(true);
    }

    function afterOpenModal(value:boolean) :void {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = "#f00";
    }

    function closeModal(value:boolean) :void {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                style={customStyles}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                {children}
            </Modal>
        </div>
    );
}

export default React_modal;

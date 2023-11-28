import React from "react"
import { Modal } from "react-bootstrap";

function CustomAlert({show, setShow, message}) {

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
                <Modal.Body>
                    <h3 style={{color: '#005E21',fontWeight: 'bolder', textAlign: 'center'}}>{message}</h3>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CustomAlert
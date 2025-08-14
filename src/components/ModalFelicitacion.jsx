import { Button, Modal, ModalBody, ModalFooter } from "flowbite-react";
import { useState } from "react";

function ModalFelicitacion({ openModal, setOpenModal }) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalBody>
          <div className="space-y-6 text-center">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Felicidades, ganaste!!!
            </p>
            <img
              className="mx-auto rounded-2xl"
              src="https://media.tenor.com/5BYK-WS0__gAAAAM/cool-fun.gif"
              alt="gatito bailando"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="mx-auto" onClick={() => setOpenModal(false)}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalFelicitacion;

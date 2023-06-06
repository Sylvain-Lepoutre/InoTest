import { useRef, useState } from "react";
import useEscapeKey from "../hook/useEscapeKey";

type ModalButtonProps = {
  buttonText: string;
  modalContent: string;
  style?: string;
};

export default function ModalButton(props: ModalButtonProps) {
  const buttonText = props.buttonText !== undefined ? props.buttonText : "";
  const modalContent = props.modalContent !== undefined ? props.modalContent : "";
  const style = props.style !== undefined ? props.style : "";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const escapeRef = useRef<HTMLElement>(null);

  useEscapeKey(escapeRef);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style}>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        {buttonText}
      </button>

      {isModalOpen && (
        <dialog
          className="fixed inset-0 flex items-center justify-center z-50 border-none"
          aria-label="Accessibility error window"
        >
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white p-4 rounded z-10">
            <p>{modalContent}</p>
            <button
              ref={escapeRef}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Fermer
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

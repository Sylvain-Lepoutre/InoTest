import { useEffect, useRef, useState } from "react";
import useEscapeKey from "../../hook/useEscapeKey";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import useOuterClick from "../../hook/useOuterClick";

type ErrorModalProps = {
  buttonText: string;
  modalContent: string;
  style?: string;
  labelledby?: string;
  describedby?: string;
};

export default function ErrorModal(props: ErrorModalProps) {
  const { t } = useTranslation();
  i18n.language;

  const buttonText = props.buttonText !== undefined ? props.buttonText : "";
  const modalContent = props.modalContent !== undefined ? props.modalContent : "";
  const style = props.style !== undefined ? props.style : "";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const escapeRef = useRef<HTMLElement>(null);
  const clickRef = useRef<HTMLDialogElement>();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEscapeKey(handleCloseModal);
  useOuterClick(clickRef, handleCloseModal);

  useEffect(() => {
    if (isModalOpen) {
      clickRef.current?.showModal();
    } else {
      clickRef.current?.close();
    }
  }, [isModalOpen]);

  return (
    <div className={style}>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
        {buttonText}
      </button>

      <dialog
        aria-describedby={props.describedby}
        aria-label={t("aria-modal")}
        aria-labelledby={props.labelledby}
        ref={clickRef}
        className="bg-white rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-center p-8 flex-col">
          <p className="text-gray-800 text-lg max-w-[35rem]">{modalContent}</p>
          <button
            ref={escapeRef}
            className="mt-6 bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
            onClick={handleCloseModal}
          >
            {t("close")}
          </button>
        </div>
      </dialog>
    </div>
  );
}

import { useRef, useState } from "react";
import useEscapeKey from "../../hook/useEscapeKey";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import useOuterClick from "../../hook/useOuterClick";

type ModalProps = {
  buttonText: string;
  modalContent: string;
  style?: string;
  labelledby?: string;
  describedby?: string;
};

export default function Modal(props: ModalProps) {
  const { t } = useTranslation();
  i18n.language;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const escapeRef = useRef<HTMLElement>(null);
  const clickRef = useRef<HTMLElement>();

  const openRightModal = () => {
    setIsModalOpen(true);
  };

  const closeRightModal = () => {
    setIsModalOpen(false);
  };

  useEscapeKey(closeRightModal);
  useOuterClick(clickRef, closeRightModal);

  return (
    <div className={props.style}>
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={openRightModal}
      >
        {props.buttonText}
      </button>

      {isModalOpen && (
        <dialog
          aria-labelledby={props.labelledby}
          aria-describedby={props.describedby}
          ref={clickRef}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-screen h-screen"
          aria-label={t("aria-modal")}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p className="text-gray-800 text-lg max-w-[35rem]">{props.modalContent}</p>
            <button
              type="button"
              ref={escapeRef}
              className="mt-6 bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg"
              onClick={closeRightModal}
            >
              {t("close")}
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

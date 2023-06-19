import { useRef, useState } from "react";
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
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const escapeRef = useRef<HTMLElement>(null);
  const clickRef = useRef<HTMLElement>();

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const openErrorModal = () => {
    setIsErrorModalOpen(true);
  };

  useEscapeKey(closeErrorModal);
  useOuterClick(clickRef, closeErrorModal);

  return (
    <div className={style}>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={openErrorModal}>
        {buttonText}
      </button>

      {isErrorModalOpen && (
        <dialog
          aria-labelledby={props.labelledby}
          aria-describedby={props.describedby}
          ref={clickRef}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-screen h-screen"
          aria-label={t("aria-modal")}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p className="text-gray-800 text-lg max-w-[35rem]">{modalContent}</p>
            <button
              ref={escapeRef}
              className="mt-6 bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
              onClick={closeErrorModal}
            >
              {t("close")}
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}

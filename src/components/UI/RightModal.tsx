import { useRef, useState } from "react";
import useEscapeKey from "../../hook/useEscapeKey";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

type RightModalButtonProps = {
  buttonText: string;
  modalContent: string;
  style?: string;
};

export default function RightModalButton(props: RightModalButtonProps) {
  const { t } = useTranslation();
  i18n.language;

  const buttonText = props.buttonText !== undefined ? props.buttonText : "";
  const modalContent = props.modalContent !== undefined ? props.modalContent : "";
  const style = props.style !== undefined ? props.style : "";
  const [isRightModalOpen, setIsRightModalOpen] = useState(false);
  const escapeRef = useRef<HTMLElement>(null);

  useEscapeKey(escapeRef);

  const openRightModal = () => {
    setIsRightModalOpen(true);
  };

  const closeRightModal = () => {
    setIsRightModalOpen(false);
  };

  return (
    <div className={style}>
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={openRightModal}
      >
        {buttonText}
      </button>

      {isRightModalOpen && (
        <dialog
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-screen h-screen"
          aria-label="Accessibility error window"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p className="text-gray-800 text-lg max-w-[35rem]">{modalContent}</p>
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

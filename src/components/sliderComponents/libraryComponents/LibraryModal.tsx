import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useEscapeKey from "../../../hook/useEscapeKey";
import useOuterClick from "../../../hook/useOuterClick";

type ModalProps = {
  buttonText: string;
  modalContent: string;
  style?: string;
  labelledby?: string;
  describedby?: string;
};

export default function LibraryModal(props: ModalProps) {
  const { t } = useTranslation();

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
    <div className="flex justify-center items-center w-[87vw]">
      <button
        type="button"
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
        onClick={openRightModal}
      >
        {t("open")}
      </button>

      {isModalOpen && (
        <dialog
          aria-labelledby={props.labelledby}
          aria-describedby={props.describedby}
          ref={clickRef}
          className="fixed inset-0 flex items-start justify-center m-0 z-50 rounded bg-black bg-opacity-50 w-full h-full"
          aria-label={t("aria-modal")}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p className="text-gray-800 text-lg max-w-[35rem]">{t("message")}</p>
            <button
              type="button"
              ref={escapeRef}
              className="mt-6 bg-slate-500 hover:bg-slate-700 text-white font-semibold py-3 px-20 rounded-lg"
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

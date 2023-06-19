export default `import { useRef, useState } from "react";
import useEscapeKey from "../../../hook/useEscapeKey";
import useOuterClick from "../../../hook/useOuterClick";

type ModalProps = {
  labelledby?: string;
  describedby?: string;
};

export default function LibraryModal(props: ModalProps) {
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
        Open
      </button>

      {isModalOpen && (
        <dialog
          aria-labelledby={props.labelledby}
          aria-describedby={props.describedby}
          ref={clickRef}
          className="fixed inset-0 flex items-center justify-center z-50 rounded w-screen h-screen bg-transparent"
          aria-label="Accessibility window"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p className="text-gray-800 text-lg max-w-[35rem]">Your text here</p>
            <button
              type="button"
              ref={escapeRef}
              className="mt-6 bg-slate-500 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg"
              onClick={closeRightModal}
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}`;

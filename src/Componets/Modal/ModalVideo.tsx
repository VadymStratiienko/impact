import Modal from "styled-react-modal";
import FocusLock from "react-focus-lock";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const StyledModal = Modal.styled`
position: relative;
padding-top: 26.25%;
max-width:800px;
max-height:600px;
margin: 0 auto;
transition : all 0.3s ease-in-out;`;

const XIcon = styled(IoMdClose)`
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  font-size: 34px;
  cursor: pointer;
  z-index: 9999;
`;

const ReactPlayerStyles = styled(ReactPlayer)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

interface IModal {
  setIsOpen: (open: boolean) => void;
  isOpen: boolean;
}

function ModalVideo({ setIsOpen, isOpen }: IModal) {
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onEscapeKeydown={() => toggleModal()}
        aria-modal={true}
        aria-labelledby="modal-label"
      >
        <FocusLock>
          <XIcon onClick={() => toggleModal()} />

          <ReactPlayerStyles
            width="100%"
            height="100%"
            controls={true}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </FocusLock>
      </StyledModal>
    </>
  );
}

export default ModalVideo;

import Wrapper from '../../assets/wrappers/Admin/DeleteNoti'
import { Modal, ModalBody } from 'reactstrap'
import { RiErrorWarningLine } from 'react-icons/ri'

function DeleteNoti({ isOpenPopup, toggle, deleteObject }) {
  return (
    <Wrapper>
      <Modal isOpen={isOpenPopup} toggle={toggle} className='delete-modal'>
        <ModalBody className='delete-modal__container'>
          <RiErrorWarningLine className='delete-modal__icon' />
          <div className='delete-modal__text1'>Are you sure?</div>
          <div className='delete-modal__text2'>
            You will not be able to recover this {deleteObject}!
          </div>
          <div className='delete-modal__btns'>
            <button
              className='delete-modal__btn delete-modal__btn--grey'
              onClick={toggle}
            >
              Cancel
            </button>
            <button
              className='delete-modal__btn delete-modal__btn--red'
              onClick={toggle}
            >
              Yes, delete it!
            </button>
          </div>
        </ModalBody>
      </Modal>
    </Wrapper>
  )
}

export default DeleteNoti

import { type FC, type ReactElement, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

interface ConfirmationPopupProps {
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmationPopup: FC<ConfirmationPopupProps> = ({ onConfirm, onCancel }): ReactElement => {
  const [show, setShow] = useState(true)

  const handleClose = (): void => {
    setShow(false)
    onCancel()
  }

  const handleConfirm = (): void => {
    setShow(false)
    onConfirm()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Подтвердите удаление</Modal.Title>
      </Modal.Header>
      <Modal.Body>Удалить новость?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationPopup

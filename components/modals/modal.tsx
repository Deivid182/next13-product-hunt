"use client"
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen, onClose, title
}) => {


  return (
    <div>Modal</div>
  )
}

export default Modal
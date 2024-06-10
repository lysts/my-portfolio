import Image, { StaticImageData } from 'next/image'; // or your preferred image handling library
import '@/app/projects/modal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string | StaticImageData;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageUrl, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content dark:bg-black" onClick={(e)=> e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        {typeof imageUrl === 'string' ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <Image src={imageUrl} alt={title} />
        )}
        <h2 className="py-5 dark:text-white">{title}</h2>
        <p className="dark:text-white">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
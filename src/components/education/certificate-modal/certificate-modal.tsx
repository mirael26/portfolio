import { useEffect } from 'react';
import './certificate-modal.scss';

interface ICertificateModalProps {
  activeCertificate: string | null;
  closeModal: () => void;
}

const CertificateModal = ({activeCertificate, closeModal}: ICertificateModalProps) => {
  useEffect(() => {
    if (activeCertificate) {
      onModalOpen();
    } else {
      onModalClose();
    }
  }, [activeCertificate]);

  const handleEscClick = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onModalClose();
    }
  };

  const onModalOpen = () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('header')?.setAttribute('inert', 'inert');
    document.querySelector('education')?.setAttribute('inert', 'inert');
    document.addEventListener('keydown', handleEscClick);
  };

  const onModalClose = () => {
    document.body.style.overflow = 'visible';
    document.querySelector('header')?.removeAttribute('inert');
    document.querySelector('education')?.removeAttribute('inert');
    document.removeEventListener('keydown', handleEscClick);
  };

  return (
    activeCertificate
      ?
        <div className="certificate-modal" onClick={closeModal}>
          <div className="certificate-modal__certificate">
            <img src={require(`../../../image/${activeCertificate}`)} alt="Сертификат" />
          </div>
        </div>
      : null
  );
};

export default CertificateModal;

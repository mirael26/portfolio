import { useState } from 'react';
import { educationInfo } from '../../consts';
import CertificateModal from './certificate-modal/certificate-modal';
import EducationItem from './education-item/education-item';
import './education.scss';

const Education = () => {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  return (
    <div className="education">
      <h2 className="education__title">Образование и курсы</h2>
      <div className="education__list">
        {educationInfo.map((info, i) => {
          return <EducationItem key={`ed-item-${i}`} info={info} index={i + 1}/>
        })}
      </div>
      <div className="education__certificates">
        <div className="education__certificates-image" onClick={() => setActiveCertificate('certificate-1.jpg')}>
          <img src={require('../../image/certificate-prev-1.png')} alt="Сертификат" />
        </div>
        <div className="education__certificates-image" onClick={() => setActiveCertificate('certificate-2.jpg')}>
          <img src={require('../../image/certificate-prev-2.png')} alt="Сертификат" />
        </div>
        <div className="education__certificates-image" onClick={() => setActiveCertificate('certificate-3.jpg')}>
          <img src={require('../../image/certificate-prev-3.png')} alt="Сертификат" />
        </div>
        <div className="education__certificates-image" onClick={() => setActiveCertificate('certificate-4.jpg')}>
          <img src={require('../../image/certificate-prev-4.png')} alt="Сертификат" />
        </div>
        <div className="education__certificates-image" onClick={() => setActiveCertificate('certificate-5.jpg')}>
          <img src={require('../../image/certificate-prev-5.png')} alt="Сертификат" />
        </div>
      </div>
      <CertificateModal activeCertificate={activeCertificate} closeModal={() => setActiveCertificate(null)}/>
    </div>
  );
};

export default Education;

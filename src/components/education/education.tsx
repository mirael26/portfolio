import { educationInfo } from '../../consts';
import EducationItem from './education-item/education-item';
import './education.scss';

const Education = () => (
  <div className="education">
    <h2 className="education__title">Образование и курсы</h2>
    <div className="education__list">
      {educationInfo.map((info, i) => {
        return <EducationItem key={`ed-item-${i}`} info={info} index={i + 1}/>
      })}
    </div>
    <div className="education__certificates">
      <div className="education__certificates-image">
        <img src={require('../../image/certificate-prev-1.png')} alt="Сертификат" />
      </div>
      <div className="education__certificates-image">
        <img src={require('../../image/certificate-prev-2.png')} alt="Сертификат" />
      </div>
      <div className="education__certificates-image">
        <img src={require('../../image/certificate-prev-3.png')} alt="Сертификат" />
      </div>
      <div className="education__certificates-image">
        <img src={require('../../image/certificate-prev-4.png')} alt="Сертификат" />
      </div>
      <div className="education__certificates-image">
        <img src={require('../../image/certificate-prev-5.png')} alt="Сертификат" />
      </div>
    </div>
  </div>
);

export default Education;

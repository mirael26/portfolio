import { IEducationInfo } from '../../../type';
import './education-item.scss';

interface IEducationItemProps {
  info: IEducationInfo;
  index: number;
}

const EducationItem = ({info, index}: IEducationItemProps) => (
  <div className="education-item" style={{animationDelay: `${index * 0.3}s`}}>
    <div className="education-item__container">
      <p className="education-item__year">{info.year}</p>
      <p className="education-item__title">{info.title}</p>
      <p className="education-item__institution">{info.institution}</p>
    </div>
  </div>
);

export default EducationItem;

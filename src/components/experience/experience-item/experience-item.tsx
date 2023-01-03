import { IExperienceInfo } from '../../../type';
import './experience-item.scss';

interface IExperienceItemProps {
  info: IExperienceInfo;
  index: number;
}

const ExperienceItem = ({info, index}: IExperienceItemProps) => (
  <div className="experience-item" style={{animationDelay: `${index * 0.4}s`}}>
    <div className="experience-item__container">
      <p className="experience-item__period">{info.period}</p>
      <p className="experience-item__company">{info.company}</p>
      <p className="experience-item__position">{info.position}</p>
      <p className="experience-item__description">{info.description}</p>
    </div>
  </div>
);

export default ExperienceItem;

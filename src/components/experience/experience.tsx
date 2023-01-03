import { experienceInfo } from '../../consts';
import ExperienceItem from './experience-item/experience-item';
import './experience.scss';

const Experience = () => (
  <div className="experience">
    <h2 className="experience__title">Опыт работы</h2>
    <div className="experience__list">
      {experienceInfo.map((info, i) => {
        return <ExperienceItem key={`experience-item-${i}`} info={info} index={i + 1}/>
      })}
    </div>
  </div>
);

export default Experience;

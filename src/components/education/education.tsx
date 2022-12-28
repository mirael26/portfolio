import { IEducationInfo } from '../../type';
import EducationItem from './education-item/education-item';
import './education.scss';

const educationInfo: Array<IEducationInfo> = [
  {
    year: '2008-2013',
    title: 'Маркетинг (высшее)',
    institution: 'СибУПК'
  },
  {
    year: '2019',
    title: 'HTML и CSS, уровень 1',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'HTML и CSS, уровень 2',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'JavaScript. Профессиональная разработка веб-интерфейсов',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'JavaScript. Архитектура клиентских приложений',
    institution: 'HTML Academy'
  },
  {
    year: '2020',
    title: 'React. Разработка сложных клиентских приложений',
    institution: 'HTML Academy'
  },
];

const Education = () => (
  <div className="education">
    <h2 className="education__title">Образование и курсы</h2>
    <div className="education__list">
      {educationInfo.map((info, i) => {
        return <EducationItem key={`ed-item-${i}`} info={info} index={i + 1}/>
      })}
    </div>
    <div className="education__line"></div>
  </div>
);

export default Education;

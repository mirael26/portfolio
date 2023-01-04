import { IPortfolioData } from '../../../type';
import './portfolio-card.scss';

interface IPortfolioCardProps {
  index: number;
  info: IPortfolioData;
}

const PortfolioCard = ({index, info}: IPortfolioCardProps) => (
  <div className="portfolio-card">
    <div className="portfolio-card__image">
      <img src={require(`../../../image/${info.preview}`)} alt="Превью проекта" />
    </div>
    <div className="portfolio-card__info">
      <h3 className="portfolio-card__title">{info.title}</h3>
      <p className="portfolio-card__description">{info.description}</p>
      <div className="portfolio-card__buttons">
        {info.demoSrc && 
          <div className="portfolio-card__button-wrapper">
            <a href={info.demoSrc} className="portfolio-card__button portfolio-card__button--demo" target="_blank">Демо</a>
          </div>
        }
        {info.codeSrc &&
          <div className="portfolio-card__button-wrapper">
            <a href={info.codeSrc} className="portfolio-card__button portfolio-card__button--code" target="_blank">Код</a>
          </div>
        }
      </div>
    </div>
  </div>
);

export default PortfolioCard;
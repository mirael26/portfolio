import { useState } from 'react';
import { portfolioData } from '../../consts';
import { IPortfolioData } from '../../type';
import PortfolioCard from './portfolio-card/portfolio-card';
import PortfolioFilters from './portfolio-filters/portfolio-filters';
import './portfolio.scss';

type TFilter = 'layout' | 'spa' | 'typescript' | 'redux' | 'animation' | 'tests' ;
const Portfolio = () => {
  const [filters, setFilters] = useState<Array<string>>([]);

  const filterCards = (cards: Array<IPortfolioData>) => {
    if (!filters.length) {
      return cards;
    }

    const filteredCards = cards.filter((card) => filters.find((filter) => card[filter as TFilter]));
    return filteredCards;
  };

  const displayedCards = filterCards(portfolioData);

  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Примеры работ</h2>
      <PortfolioFilters filters={filters} setFilters={setFilters}/>

      <div className="portfolio__list">
        {displayedCards.map((data, i) => {
          return <PortfolioCard key={`project-${i}`} index={i + 1} info={data}/>
        })}
      </div>
    </div>
  );
};

export default Portfolio;

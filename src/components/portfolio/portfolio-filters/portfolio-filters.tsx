import './portfolio-filters.scss';

interface IPortfolioFiltersProps {
  filters: Array<string>;
  setFilters: (filters: Array<string>) => void;
}

const PortfolioFilters = ({filters, setFilters}: IPortfolioFiltersProps) => {

  const handleFilterCLick = (evt: React.MouseEvent<HTMLDivElement>) => {
    const filterName = evt.currentTarget.dataset.filter;

    if (!filterName) {
      return;
    }

    const isActive = filters.includes(filterName);
    
    if (isActive) {
      const newFilters = filters.slice().filter((filter) => filter !== filterName);
      setFilters(newFilters);
      evt.currentTarget.classList.remove('active');
    } else {
      const newFilters = filters.slice();
      newFilters.push(filterName);
      setFilters(newFilters);
      evt.currentTarget.classList.add('active');
    }
  };

  return (
    <div className="portfolio-filters">
      <h3 className="portfolio-filters__title">Фильтры:</h3>
      <div className="portfolio-filters__list">
        <div className="portfolio-filters__filter" data-filter={'layout'} onClick={handleFilterCLick}>Верстка</div>
        <div className="portfolio-filters__filter" data-filter={'spa'} onClick={handleFilterCLick}>SPA</div>
        <div className="portfolio-filters__filter" data-filter={'typescript'} onClick={handleFilterCLick}>TypeScript</div>
        <div className="portfolio-filters__filter" data-filter={'redux'} onClick={handleFilterCLick}>Redux</div>
        <div className="portfolio-filters__filter" data-filter={'animation'} onClick={handleFilterCLick}>Анимация</div>
        <div className="portfolio-filters__filter" data-filter={'tests'} onClick={handleFilterCLick}>Тесты</div>
      </div>
    </div>
  );
};

export default PortfolioFilters;

import './skills.scss';

const Skills = () => (
  <div className="skills">
    <div className="skills__technologies">
      <h2 className="skills__title">Технологии:</h2>
      <div className="skills__technologies-list">
        <div className="skills__technologies-row">
          <div className="skills__technology">
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#js-logo"></use>
            </svg>
            <p className="skills__tooltip">Java Script</p>
          </div>
          <div className="skills__technology skills__technology--react" aria-label='React'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#react-logo"></use>
            </svg>
            <p className="skills__tooltip">React</p>
          </div>
          <div className="skills__technology skills__technology--redux" aria-label='Redux'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#redux-logo"></use>
            </svg>
            <p className="skills__tooltip">Redux</p>
          </div>
          <div className="skills__technology skills__technology--ts" aria-label='Typescript'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#ts-logo"></use>
            </svg>
            <p className="skills__tooltip">Typescript</p>
          </div>
          <div className="skills__technology skills__technology--jest" aria-label='Jest'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#jest-logo"></use>
            </svg>
            <p className="skills__tooltip">Jest</p>
          </div>
          <div className="skills__technology skills__technology--git" aria-label='Git'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#git-logo"></use>
            </svg>
            <p className="skills__tooltip">Git</p>
          </div>
          <div className="skills__technology skills__technology--webpack" aria-label='Webpack'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#webpack-logo"></use>
            </svg>
            <p className="skills__tooltip">Webpack</p>
          </div>
        </div>

        <div className="skills__technologies-row">
          <div className="skills__technology skills__technology--html" aria-label='Html'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#html5-logo"></use>
            </svg>
            <p className="skills__tooltip">Html</p>
          </div>
          <div className="skills__technology skills__technology--css" aria-label='CSS'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#css3-logo"></use>
            </svg>
            <p className="skills__tooltip">CSS</p>
          </div>
          <div className="skills__technology skills__technology--pug" aria-label='Pug'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#pug-logo"></use>
            </svg>
            <p className="skills__tooltip">Pug</p>
          </div>
          <div className="skills__technology skills__technology--sass" aria-label='SASS'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#sass-logo"></use>
            </svg>
            <p className="skills__tooltip">SASS</p>
          </div>
          <div className="skills__technology skills__technology--ps" aria-label='Photoshop'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#ps-logo"></use>
            </svg>
            <p className="skills__tooltip">Photoshop</p>
          </div>
          <div className="skills__technology skills__technology--figma" aria-label='Figma'>
            <svg className="skills__icon" width='107' height='107'>
              <use xlinkHref="sprite.svg#figma-logo"></use>
            </svg>
            <p className="skills__tooltip">Figma</p>
          </div>
        </div>
      </div>
    </div>
    <div className="skills__another-skills">
      <h2 className="skills__title">Навыки:</h2>
      <p className="skills__text">БЭМ
        <br/>Адаптивная верстка
        <br/>React Hooks
        <br/>REST API
        <br/>CSS анимация
      </p>
    </div>
  </div>
);

export default Skills;

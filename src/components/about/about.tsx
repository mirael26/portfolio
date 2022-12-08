import './about.scss';
import Social from './social/social';

const About = () => (
  <div className="about">
    <div className="about__info">
      <p className="about__text">Привет! Меня зовут <span className='about__accent-text'>Эльмира.</span></p>
      <p className="about__text">Я начинающий Frontend разработчик.</p>
      <p className="about__text">Меня всегда привлекал дизайн и нравились красивые интерфейсы. Я хотела развиваться как дизайнер, но в какой-то момент попробовала верстку.
        <br/><span className='about__highlighted'>И мне понравилось!</span><br/>
        Так я попала во фронтенд.</p>
      <p className="about__text">Обладаю такими полезными качествами как:
        <ul className="about__text-list">
          <li className="about__text-item">настойчивость;</li>
          <li className="about__text-item">ответственность;</li>
          <li className="about__text-item">неконфликтность.</li>
        </ul>
      </p>
      <p className="about__text">Еще я в меру перфекционист, люблю писать аккуратный код и искать решения в первую очередь самостоятельно, а уже потом обращаться к старшему товарищу.</p>
      <p className="about__text"><span className='about__highlighted'>Связаться со мной:</span><br/>capricorn_26@mail.ru</p>
      <Social/>
    </div>

    <div className="about__photo">
      <img src={require('../../image/my-photo.png')} width='322' height='480' alt='Мое фото'/>
    </div>
  </div>
);

export default About;

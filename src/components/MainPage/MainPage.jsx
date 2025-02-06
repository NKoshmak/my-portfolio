
import './MainPage.css';

export default function MainPage() {

  return (
  <div>
    <div className="main-page" id="main">
      <div className="text__content">
        <p className="text__content__info">
        Hey there! I’m a Frontend developer, and I absolutely love building cool stuff for the web.
        I’m teaming up with clients and agencies from all over to turn ideas into something awesome.
        </p>
        <div className="development">
          <h2 className="development__title">Skills</h2>
          <ul className="development__list">
            <li>HTML / CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Typescript</li>
          </ul>
        </div>

        <div className="icons">
          <a
          className="text__content__link"
          href="mailto:koshmaknatalia@gmail.com"
          >
          Get in touch
          </a>
          <a 
            href="https://www.linkedin.com/in/nataliia-k-8457b530a/"
            target='blank'
          >
          <i class="fa-brands fa-linkedin-in fa-2xl"></i>
          </a>

          <a href="https://github.com/NKoshmak" target='blank'>
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
      </div>

      <div className="main__name">
        <p className="main-page__name">Natalia Koshmak</p>
      </div>
   </div>
   </div>
  );
}

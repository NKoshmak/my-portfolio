/** @format */

import CodeEditor from "../CodeBackground/CodeBackground";
import NeonTrail from "../NeonCursor/NeonTrail";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div>
      <NeonTrail />

      <div className="main-page" id="main">
        <div className="text__content">
          <div className="development">
            <h2 className="development__title">Skills</h2>
            <ul className="development__list">
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Figma</li>
              <li>Framer</li>
            </ul>
          </div>

          <div className="right__column">
            <div className="top__icons">
              <a
                href="https://www.linkedin.com/in/nataliia-k-8457b530a/"
                target="blank"
              >
                <i className="fa-brands fa-linkedin-in fa-2xl"></i>
              </a>
              <a href="https://github.com/NKoshmak" target="blank">
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
            </div>

            <div className="get_in_touch">
              <a
                className="text__content__link"
                href="mailto:koshmaknatalia@gmail.com"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div>
          <CodeEditor />
        </div>

        <div className="main__name">
          <p className="main-page__name">Natalia Koshmak</p>
        </div>
      </div>
    </div>
  );
}

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
            <h2 className="development__title"> Skills</h2>
            <ul className="development__list">
              <li>HTML / CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Typescript</li>
            </ul>

            <div className="get_in_touch">
              <a
                className="text__content__link"
                href="mailto:koshmaknatalia@gmail.com"
              >
                Get in touch
              </a>
            </div>

            <a
              href="https://pastelpixelsstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#80cbc4", textDecoration: "underline", cursor:"pointer", fontSize:"1rem", zIndex: 10, position: 'relative' }}
            >
              My UI/UX Work →
            </a>
          </div>

          <div className="top__icons">
            <a
              href="https://www.linkedin.com/in/nataliia-k-8457b530a/"
              target="blank"
            >
              <i class="fa-brands fa-linkedin-in fa-2xl"></i>
            </a>

            <a href="https://github.com/NKoshmak" target="blank">
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
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

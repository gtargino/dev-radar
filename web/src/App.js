import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18108904?s=460&v=4" alt="Gustavo Targino"></img>
              <div className="user-info">
                <strong>Gustavo Targino</strong>
                <span>JavaScript, React, React Native</span>
              </div>
            </header>
            <p>Trying to be better!</p>
            <a href="https://github.com/gtargino">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18108904?s=460&v=4" alt="Gustavo Targino"></img>
              <div className="user-info">
                <strong>Gustavo Targino</strong>
                <span>JavaScript, React, React Native</span>
              </div>
            </header>
            <p>Trying to be better!</p>
            <a href="https://github.com/gtargino">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18108904?s=460&v=4" alt="Gustavo Targino"></img>
              <div className="user-info">
                <strong>Gustavo Targino</strong>
                <span>JavaScript, React, React Native</span>
              </div>
            </header>
            <p>Trying to be better!</p>
            <a href="https://github.com/gtargino">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18108904?s=460&v=4" alt="Gustavo Targino"></img>
              <div className="user-info">
                <strong>Gustavo Targino</strong>
                <span>JavaScript, React, React Native</span>
              </div>
            </header>
            <p>Trying to be better!</p>
            <a href="https://github.com/gtargino">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

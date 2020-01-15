import React, { useState } from 'react';

import './global.css';
import './App.css';
//3 Conceitos de React

// Componente: é um bloco (função) isolado que retorna algum conteúdo HTML, CSS, JS, que não interfere em outros blocos
// Propriedade: informações que um componente PAI passa para o componente filho
// Estado: informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );

}

export default App;

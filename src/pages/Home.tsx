import React from 'react'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleImg from '../assets/google-icon.svg'

const Home = () => {
  return (
    <div>
        <aside>
            <img src={illustrationImg} alt="Ilustração" />
            <strong>Crie salas de Pergunte & responda ao vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo real.</p>
        </aside>
        <main>
            <div>
                <img src={logoImg} alt="Logo" />
                <button>
                  <img src={googleImg} alt="Icone do Google" />
                  Criar a sua sala com o google
                </button>
            </div>
            <div>ou entre em uma sala</div>
            <form>
              <input type="text" placeholder='Digite o código da sala'/>
              <button type="submit">Entrar na Sala</button>
            </form>
        </main>
    </div>
  )
}

export default Home
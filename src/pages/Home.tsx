import React from 'react'

import '../styles/auth.scss'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleImg from '../assets/google-icon.svg'
import Button from '../components/Button'

const Home = () => {
  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie salas de Pergunte & responda ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Logo" />
          <button className='create-room'>
            <img src={googleImg} alt="Icone do Google" />
            Criar a sua sala com o google
          </button>

          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder='Digite o código da sala' />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home
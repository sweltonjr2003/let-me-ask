import React from 'react'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

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
            </div>
        </main>
    </div>
  )
}

export default Home
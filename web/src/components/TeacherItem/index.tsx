import React from 'react';
import wppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

// interface Teacher

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/36801789?s=460&u=95233343aa1f650bf1307321fd81c014c10a79ba&v=4" alt="Leandro C. Silva"/>
        <div>
          <strong>Leandro C. Silva</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>Preço/hora <strong>R$ 80,00</strong></p>
        <button type="button">
          <img src={wppIcon} alt="Entrar em contato"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>

        <div className="formWrapper">

            <span className="logo">Steam Chat</span>
            <span className="title">Registro</span>

            <form>
                <input type="text" placeholder='apelido' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                    <img src={Add} alt="adicionar avatar" />
                    <span>Selecione uma foto</span>
                </label>
                <button>Registar</button>
            </form>

            <p>Já tem uma conta? Login</p>
        </div>
    </div>
  )
}

export default Register;
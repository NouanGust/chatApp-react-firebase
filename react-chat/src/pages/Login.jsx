import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>

        <div className="formWrapper">

            <span className="logo">Steam Chat</span>
            <span className="title">Registro</span>

            <form>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <button>Login</button>
            </form>

            <p>Não tem uma conta? Registro</p>
        </div>
    </div>
  )
}

export default Login;
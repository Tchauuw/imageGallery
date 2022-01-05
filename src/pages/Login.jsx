import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          {/* Mettez l'alerte ici ! */}
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
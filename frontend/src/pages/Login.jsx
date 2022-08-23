import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  return (
    <>
      <section>
        <div className='heading'>
          <h1>
            <FaSignInAlt />Login
          </h1>
        </div>
      </section>

      <section className='form'>
        <form>


          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              placeholder='Email'
              value={email}
              name='email'
              id='email'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Enter password'
              value={password}
              name='password'
              id='password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block ' type='submit' >Login</button>
          </div>
        </form>
      </section>

    </>
  )
}

export default Login
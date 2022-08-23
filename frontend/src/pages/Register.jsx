import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

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
            <FaUser />Register
          </h1>
        </div>
      </section>

      <section className='form'>
        <form>

          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Enter your Name'
              value={name}
              name='name'
              id='name'
              onChange={onChange}
            />
          </div>
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
            <input
              className='form-control'
              type='password'
              placeholder='Confirm passwrd'
              value={password2}
              name='password2'
              id='password2'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <button className='btn btn-block ' type = 'submit' >Login</button>
        </div>
        </form>
      </section>

    </>
  )
}

export default Register
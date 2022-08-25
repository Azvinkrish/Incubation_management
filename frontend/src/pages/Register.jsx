import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()  
const {user, isLoading, isError, isSuccess, message} =  useSelector (
  (state) => state.auth

) 

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  useEffect(() => {

  },[user, isLoading, isError, isSuccess, message, navigate, dispatch ])

  const onSubmit=(e) => {
    e.preventDefault()

    if(password2 !== password2){
      toast.error('password do not match')
      
    }else{
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }

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
          <button className='btn btn-block ' type = 'submit'  onSubmit={onSubmit}>Login</button>
        </div>
        </form>
      </section>

    </>
  )
}

export default Register
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'

import './TextInput.scss'

import { setUser, selectUser } from '@/redux/slices/userSlice'

const TextInput = ({ label, name, placeholder = label, value, onAction, disabled=false }) => {
  const dispatch = useDispatch()
  const { userData } = useSelector(selectUser)

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(setUser({ name, value }))
  }
  
  const keepLabel = value.length > 0 ? 'keepLabel' : ''
  return (
    <div className="textInput">
      <input 
        type='text'
        id={name}
        name={name}
        placeholder={`${placeholder}`.toUpperCase()}
        onChange={onAction || handleChange}
        value={value || userData[name]}
        autoComplete='off'
        disabled={disabled}
      />
      <label
        className={!disabled && keepLabel}
      >{`${label.toUpperCase()}`}</label>
    </div>
  )
}

export default TextInput
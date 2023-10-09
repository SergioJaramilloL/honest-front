/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'

import './ServicesCard.scss'
import { setUser } from '@/redux/slices/userSlice'

const ServicesCard = ({ infoPlan, check }) => {
  const dispatch = useDispatch()

  const { label, price } = infoPlan

  const handleChange = (e) => {
    const { name } = e.target
    dispatch(setUser({ name, value: infoPlan }))
  }

  return (
    <label
      className="servicesCard"
    >
      <p className="servicesCard_title">
        {label}
      </p>
      <p className="servicesCard_subtitle">
        Service
      </p>
      <img 
        src="./x-yellow.svg" 
        alt="yellow x icon"
        loading="lazy"
      />
      <p
        className="servicesCard_price"
      >
        <span>{`$`}</span>{price}<span>{`/mo`}</span>
      </p>
      <input
        checked={check}
        type="radio"
        name="plan"
        className="servicesCard_input"
        onChange={handleChange}
      />
    </label>
  )
}

export default ServicesCard
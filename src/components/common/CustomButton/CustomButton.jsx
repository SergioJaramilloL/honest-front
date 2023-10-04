/* eslint-disable react/prop-types */
import './CustomButton.scss'

const CustomButton = ({ type= 'button', children, onAction }) => {
  return (
    <button
      className="customButton"
      type={type}
      onClick={onAction}
    >{`${children.toUpperCase()}`}</button>
  )
}

export default CustomButton
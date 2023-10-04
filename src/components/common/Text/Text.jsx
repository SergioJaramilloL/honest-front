/* eslint-disable react/prop-types */
import './Text.scss'

const Text = ({ classStyle, children }) => {
  return (
    <p
      className={classStyle}
    >{children}</p>
  )
}

export default Text
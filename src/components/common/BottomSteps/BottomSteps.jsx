/* eslint-disable react/prop-types */
import './BottomSteps.scss'

const BottomSteps = ({ currentStep = 1, totalSteps = 1 }) => {
  return (
    <p
      className="bottomSteps"
    >{`STEP ${currentStep} OF ${totalSteps}`}</p>
  )
}

export default BottomSteps
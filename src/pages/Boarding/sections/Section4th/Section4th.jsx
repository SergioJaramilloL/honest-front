/* eslint-disable react/prop-types */
// Dependencies
import { useSelector } from 'react-redux'
// Styles
import '../../Boarding.scss'
// Components
import { Text } from "@/components/common/Text"
import { ServicesCard } from "@/components/common/ServicesCard"
import { CustomButton } from "@/components/common/CustomButton"
import { BottomSteps } from "@/components/common/BottomSteps"
// Utils
import { selectUser } from "@/redux/slices/userSlice"

const Section4th = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const { selectAddress } = useSelector(selectUser)

  return (
    <div
      className='boardingContainer'
    >
      <Text
        classStyle='mainTitle'
      >Please select the TV plan you want to enjoy:</Text>
      <div
        className='boardingContainer__services'
      >
        {selectAddress?.plans.map((plan) => (
          <ServicesCard 
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
      <div>
        <CustomButton 
          onAction={onNextStep}
          >I AM READY!</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </div>
    </div>
  )
}

export default Section4th
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'

import './Section4th.scss'

import { Text } from "@/components/common/Text"
import { ServicesCard } from "@/components/common/ServicesCard"
import { CustomButton } from "@/components/common/CustomButton"
import { BottomSteps } from "@/components/common/BottomSteps"

import { selectUser } from "@/redux/slices/userSlice"

const Section4th = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const { selectAddress } = useSelector(selectUser)

  return (
    <div
      className="section4th"
    >
      <Text
        classStyle="mainTitle"
      >Please select the TV plan you want to enjoy:</Text>
      <div
        className="section4th__services"
      >
        {selectAddress?.plans.map((plan) => (
          <ServicesCard 
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
      <CustomButton 
        onAction={onNextStep}
        >I AM READY!</CustomButton>
      <BottomSteps
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
    </div>
  )
}

export default Section4th
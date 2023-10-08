/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux'

import './Section3rd.scss'

import { Text } from '@/components/common/Text'
import { AddressInputs } from '@/components/AddressInputs'
import { CustomButton } from '@/components/common/CustomButton'
import { BottomSteps } from '@/components/common/BottomSteps'

import { selectUser } from '@/redux/slices/userSlice'

const Section3rd = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const { userData } = useSelector(selectUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    onNextStep()
  }

  return(
    <form
      className="section3rd"
      onSubmit={handleSubmit}
    >
      <Text
        classStyle="mainTitle"
      >Pleasure to meet you, {userData?.firstname}!<br/> What is your install address?</Text>
      <AddressInputs/>
      <div>
        <CustomButton onAction={onNextStep} type="submit">Yes!</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </div>
    </form>
  )
}

export default Section3rd
/* eslint-disable react/prop-types */
// Dependencies
import { useSelector } from 'react-redux'
// Styles
import '../../Boarding.scss'
// Components
import { Text } from '@/components/common/Text'
import { AddressInputs } from '@/components/AddressInputs'
import { CustomButton } from '@/components/common/CustomButton'
import { BottomSteps } from '@/components/common/BottomSteps'
// utils
import { selectUser } from '@/redux/slices/userSlice'

const Section3rd = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const { userData } = useSelector(selectUser)

  return(
    <div
      className='boardingContainer'
    >
      <Text
        classStyle={'mainTitle'}
      >Pleasure to meet you, {userData?.firstname}!<br/> What is your install address?</Text>
      <AddressInputs/>
      <div>
        <CustomButton onAction={onNextStep}>Yes!</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </div>
    </div>
  )
}

export default Section3rd
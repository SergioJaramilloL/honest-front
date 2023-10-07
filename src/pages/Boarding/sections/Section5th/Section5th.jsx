/* eslint-disable react/prop-types */
// Dependencies
import { useSelector, useDispatch } from 'react-redux'
// Styles
import '../../Boarding.scss'
// Components
import { Text } from "@/components/common/Text"
import { TextInput } from "@/components/common/TextInput"
import { CustomButton } from "@/components/common/CustomButton"
import { BottomSteps } from "@/components/common/BottomSteps"
// Utils
import { selectUser, createUser } from "@/redux/slices/userSlice"

const Section5th = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const dispatch = useDispatch()
  const { userData } = useSelector(selectUser)

  const handleSaveUserData = async (user) => {
    dispatch(createUser(user))
    onNextStep()
  }

  return(
    <div
      className='boardingContainer'
    >
      {userData?.plan?.label === 'Premium' && (
        <Text
          classStyle='mainTitle'
        >Great news! Your first month&apos;s free!</Text>
      )}
      <Text
        classStyle='subtitle'
      >To get set up, just provide your email and phone number and we can remind
      you when the free<br/> trial ends</Text>
      <div
        className='boardingContainer__inputs'
      >
        <TextInput 
          label='Email'
          name="email"
          value={userData.email}
        />
        <TextInput 
          label='Phone Number'
          name="phone"
          value={userData.phone}
        />
      </div>
      <div>
        <CustomButton 
          onAction={handleSaveUserData}
          >SUBSCRIBE NOW!</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </div>
    </div>
  )
}

export default Section5th
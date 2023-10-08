/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux'

import './Section5th.scss'

import { Text } from "@/components/common/Text"
import { TextInput } from "@/components/common/TextInput"
import { CustomButton } from "@/components/common/CustomButton"
import { BottomSteps } from "@/components/common/BottomSteps"

import { selectUser, createUser } from "@/redux/slices/userSlice"

const Section5th = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const dispatch = useDispatch()
  const { userData } = useSelector(selectUser)

  const handleSaveUserData = async (e) => {
    e.preventDefault()
    dispatch(createUser(userData))
    onNextStep()
  }

  return(
    <form
      className="section5th"
      onSubmit={handleSaveUserData}
    >
      {userData?.plan?.label === 'Premium' && (
        <Text
          classStyle="mainTitle"
        >Great news! Your first month&apos;s free!</Text>
      )}
      <Text
        classStyle="subtitle"
      >To get set up, just provide your email and phone number and we can remind
      you when the free trial ends</Text>
      <div
        className="section5th__inputs"
      >
        <TextInput 
          label="Email"
          name="email"
          value={userData.email}
        />
        <TextInput 
          label="Phone Number"
          name="phone"
          value={userData.phone}
        />
        <p>I have a promo code!</p>
      </div>
      <div>
        <CustomButton 
          type="submit"
          >SUBSCRIBE NOW!</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      </div>
    </form>
  )
}

export default Section5th
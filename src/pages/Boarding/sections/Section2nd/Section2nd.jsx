/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

import './Section2nd.scss'

import { Text } from '@/components/common/Text';
import { CustomButton } from "@/components/common/CustomButton";
import { TextInput } from "@/components/common/TextInput";
import { BottomSteps } from "@/components/common/BottomSteps";

import { selectUser } from "@/redux/slices/userSlice";

const Section2nd = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const { userData } = useSelector(selectUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    onNextStep()
  }

  return (
    <form
      className="section2nd"
      onSubmit={onNextStep}
    >
      <Text
        classStyle="mainTitle"
      >Awesome! Let&apos;s get started with the basics.</Text>
      <div
        className="section2nd__inputs"
      >
        <TextInput 
        label="First Name"
        name="firstname"
        value={userData.firstname}
        />
        <TextInput 
          label="Last Name"
          name="lastname"
          value={userData.lastname}
        />
      </div>
      <div>
        <CustomButton
          onAction={handleSubmit}
          type="submit"
          >Next</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
          />
      </div>
    </form>
  )
}

export default Section2nd
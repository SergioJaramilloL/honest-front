/* eslint-disable react/prop-types */
// Dependencies
import { useSelector } from "react-redux";
// Styles
import '../../Boarding.scss';
// Components
import { Text } from '@/components/common/Text';
import { CustomButton } from "@/components/common/CustomButton";
import { TextInput } from "@/components/common/TextInput";
import { BottomSteps } from "@/components/common/BottomSteps";
// utils
import { selectUser } from "@/redux/slices/userSlice";

const Section2nd = ({ onNextStep, infoSteps }) => {
  const { currentStep, totalSteps } = infoSteps

  const { userData } = useSelector(selectUser)

  return (
    <div
      className='boardingContainer'
    >
      <Text
        classStyle={'mainTitle'}
      >Awesome! Let&apos;s get started with the basics.</Text>
      <div
        className='boardingContainer__inputs'
      >
        <TextInput 
        label='First Name'
        name="firstname"
        value={userData.firstname}
        />
        <TextInput 
          label='Last Name'
          name="lastname"
          value={userData.lastname}
        />
      </div>
      <div>
        <CustomButton
          onAction={onNextStep}
          >{`Next`}</CustomButton>
        <BottomSteps
          currentStep={currentStep}
          totalSteps={totalSteps}
          />
      </div>
    </div>
  )
}

export default Section2nd
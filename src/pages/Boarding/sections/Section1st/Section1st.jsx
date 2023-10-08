/* eslint-disable react/prop-types */
import './Section1st.scss'
import { Text } from '@/components/common/Text'
import { CustomButton } from "@/components/common/CustomButton"

const Section1st = ({ onNextStep }) => {
  return (
    <div
      className="section1st"
    >
      <Text classStyle="bigTitle">The Best TV service<br/> around!</Text>
      <Text classStyle="alternativeTitle">Are you ready to enjoy ultra-best service?</Text>
      <CustomButton
        onAction={onNextStep}
      >LET&apos;S DO IT!</CustomButton>
    </div>
  )
}

export default Section1st
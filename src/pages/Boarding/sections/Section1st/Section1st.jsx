/* eslint-disable react/prop-types */
import { Text } from '@/components/common/Text'
import { CustomButton } from "@/components/common/CustomButton"
import '../../Boarding.scss'

const Section1st = ({ onNextStep }) => {
  return (
    <div
      className='boardingContainer'
    >
      <Text classStyle={'bigTitle'}>The Best TV service<br/> around!</Text>
      <Text classStyle={'alternativeTitle'}>Are you ready to enjoy ultra-best service?</Text>
      <CustomButton
        onAction={onNextStep}
      >{`LET'S DO IT!`}</CustomButton>
    </div>
  )
}

export default Section1st
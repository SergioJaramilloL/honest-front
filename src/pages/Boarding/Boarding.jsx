import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import './Boarding.scss'

import { CustomButton } from "@/components/common/CustomButton"
import { TextInput } from "@/components/common/TextInput"
import { BottomSteps } from "@/components/common/BottomSteps"
import { AddressInputs } from "@/components/AddressInputs"
import { ServicesCard } from "@/components/common/ServicesCard"
import { Text } from "@/components/common/Text"

import { selectUser, createUser } from "@/redux/slices/userSlice"

const Boarding = () => {
  const dispatch = useDispatch()
  const { userData, selectAddress } = useSelector(selectUser)

  const saveUserData = async (user) => {
    dispatch(createUser(user))
    setSteps((prev) => (prev + 1))
  }


  const totalSteps = 4
  const [ steps, setSteps ] = useState(0)

  if( steps === 0 ) {
    return (
      <div
        className='boardingContainer'
      >
        <Text classStyle={'bigTitle'}>The Best TV service<br/> around!</Text>
        <Text classStyle={'alternativeTitle'}>Are you ready to enjoy ultra-best service?</Text>
        <CustomButton
          onAction={() => setSteps((prev) => (prev + 1))}
        >{`LET'S DO IT!`}</CustomButton>
      </div>
    )
  }

  if( steps === 1 ) {
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
            onAction={() => setSteps((prev) => (prev + 1))}
            >{`Next`}</CustomButton>
          <BottomSteps
            currentStep={steps}
            totalSteps={totalSteps}
            />
        </div>
      </div>
    )
  }

  if( steps === 2 ) { 
    return(
      <div
        className='boardingContainer'
      >
        <Text
          classStyle={'mainTitle'}
        >Pleasure to meet you, {userData?.firstname}!<br/> What ir your install address?</Text>
        <AddressInputs/>
        <div>
          <CustomButton
            onAction={() => setSteps((prev) => (prev + 1))}
            >{`Yes!`}</CustomButton>
          <BottomSteps
            currentStep={steps}
            totalSteps={totalSteps}
          />
        </div>
      </div>
    )
  }

  if( steps === 3 ) {
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
            onAction={() => setSteps((prev) => (prev + 1))}
            >{`I AM READY!`}</CustomButton>
          <BottomSteps
            currentStep={steps}
            totalSteps={totalSteps}
          />
        </div>
      </div>
    )
  }

  if( steps === 4 ) {
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
        >to get set up, just provide your email and phone number and we can remind
        you when the free trial ends</Text>
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
            onAction={() => saveUserData(userData)}
            >SUBSCRIBE NOW!</CustomButton>
          <BottomSteps
            currentStep={steps}
            totalSteps={totalSteps}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <Text
        classStyle='bigTitle'
      >Thank you for trusting Honest Network.</Text>
      <Text
        classStyle='alternativeTitle'
      >Your data is now in our database,<br/> we will be in touch soon.</Text>
    </>
  )
}

export default Boarding
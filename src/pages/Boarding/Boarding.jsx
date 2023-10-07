// Dependencies
import { useState } from "react";
// Styles
import './Boarding.scss';
// Components
import { Section1st } from "./sections/Section1st";
import { Section2nd } from "./sections/Section2nd";
import { Section3rd } from "./sections/Section3rd";
import { Section4th } from "./sections/Section4th";
import { Section5th } from "./sections/Section5th";
import { Section6th } from "./sections/Section6th";

const Boarding = () => {
  const [ steps, setSteps ] = useState(0)

  const totalSteps = 4

  const handleNextStep = () => {
    setSteps((prev) => (prev + 1))
  }

  if( steps === 0 ) {
    return (
      <Section1st
        onNextStep={handleNextStep}
      />
    )
  } 

  if( steps === 1 ) {
    return(
      <Section2nd
        onNextStep={handleNextStep}
        infoSteps={{ currentStep: steps, totalSteps } }
      />
    )
  }

  if( steps === 2 ) { 
    return(
      <Section3rd
        onNextStep={handleNextStep}
        infoSteps={{ currentStep: steps, totalSteps } }
      />
    )
  }

  if( steps === 3 ) {
    return (
      <Section4th
        onNextStep={handleNextStep}
        infoSteps={{ currentStep: steps, totalSteps } }
      />
    )
  }

  if( steps === 4 ) {
    return (
      <Section5th
        onNextStep={handleNextStep}
        infoSteps={{ currentStep: steps, totalSteps } }
      />
    )
  }

  return (
    <Section6th/>
  )
}

export default Boarding
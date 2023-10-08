import { useState } from "react";

import './Boarding.scss';

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

  return (
    <div className="boardingContainer">
      { steps === 0 &&       
        <Section1st
          onNextStep={handleNextStep}
        /> 
      }
      { steps === 1 &&       
        <Section2nd
          onNextStep={handleNextStep}
          infoSteps={{ currentStep: steps, totalSteps } }
        /> 
      }
      { steps === 2 &&       
        <Section3rd
          onNextStep={handleNextStep}
          infoSteps={{ currentStep: steps, totalSteps } }
        /> 
      }
      { steps === 3 &&       
        <Section4th
          onNextStep={handleNextStep}
          infoSteps={{ currentStep: steps, totalSteps } }
        />
      }
      { steps === 4 &&       
        <Section5th
          onNextStep={handleNextStep}
          infoSteps={{ currentStep: steps, totalSteps } }
        />
      }
      { steps === 5 && <Section6th/> }
    </div>
  )
}

export default Boarding
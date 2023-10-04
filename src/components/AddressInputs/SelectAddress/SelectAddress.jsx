/* eslint-disable react/prop-types */
import './SelectAddress.scss'
import { CustomButton } from "@/components/common/CustomButton"

/* const address = {
  _id: "624ce52fbf9bc46da7ab3880",
  name: "Exhibit",
  address: "56 Fulton Street",
  city: "New York",
  state: "NY",
  postal: "10038",
  plans: [
    {
      "monthsFree": 0,
      "label": "Basic",
      "price": "30"
    },
    {
      "monthsFree": 1,
      "label": "Premium",
      "price": "50"
    }
  ]
} */

const SelectAddress = ({ dataAddress, onAction, isSelected }) => {
  const { name, address, city, state, postal } = dataAddress

  return (
    <article
      className="selectAddress"
    >
      <div
        className="selectAddress_info"
      >
        <p
          className="selectAddress_info_title"
        >{name}</p>
        <p
          className="selectAddress_info_subtitle"
        >{address}, {city}, {state}, {postal}</p>
      </div>
      {!isSelected ? (
        <CustomButton onAction={onAction}>SELECT</CustomButton>
      ) : (
        <button
          className="selectAddress_remove"
          onClick={onAction}
        >X</button>
      )}
    </article>
  )
}

export default SelectAddress
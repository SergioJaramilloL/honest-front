/* eslint-disable react/prop-types */
import './SelectAddress.scss'
import { CustomButton } from "@/components/common/CustomButton"

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
        <div
          className="selectAddress_remove"
          onClick={onAction}
        >X</div>
      )}
    </article>
  )
}

export default SelectAddress
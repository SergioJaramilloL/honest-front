/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './AddressInputs.scss'
import { SelectAddress } from './SelectAddress'
import { TextInput } from "@/components/common/TextInput"
import { 
  setAddress, 
  selectUser,
  setUser,
  removeAddress
} from '@/redux/slices/userSlice'

const AddressInputs = () => {
  const dispatch = useDispatch()
  const { userData, selectAddress } = useSelector(selectUser)

  const [addressList, setAddressList] = useState([])


  const handleSearch = async (e) => {
    const { name, value } = e.target
    dispatch(setUser({ name, value }))
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}address?search=${value}`)
    const data = await res.json()
    setAddressList(data)
  }

  const handleSelect = (address) => {
    if(!selectAddress._id) {
      setAddressList([address])
      dispatch(setAddress(address))
    } else {
      setAddressList([])
      dispatch(removeAddress())
    } 
  }

  return (
    <div className='addressInput'>
      <div className={`addressInput_childs ${selectAddress._id && 'input-disabled'}`}>
        <TextInput
          label='Please type in your street address'
          name="address"
          value={userData.address}
          onAction={handleSearch}
          disabled={selectAddress._id}
        />
        <TextInput 
          label='Apt #'
          name="apt"
          value={userData.apt}
        />
      </div>
      <div
        className="addressInput_list"
      >
      {addressList.slice(0, 3).map((address) => (
        <SelectAddress 
          key={address._id}
          dataAddress={address}
          onAction={() => handleSelect(address)}
          isSelected={selectAddress?._id === address._id}
        />
      ))}
      </div>
    </div>
  )
}

export default AddressInputs
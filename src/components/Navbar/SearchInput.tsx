import { CheckIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'

type SearchInputProps = {

}

const SearchInput:React.FC<SearchInputProps> = () => {
  return (
    <Flex>
         <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input placeholder='Search dotshelf' fontSize='10pt' _placeholder={ {color: '#000000'}} _hover={{}}/>
  </InputGroup>
    </Flex>
  )
}

export default SearchInput
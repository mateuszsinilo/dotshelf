import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react'
import SearchInput from './SearchInput';

const Navbar:React.FC = () => {
  return (
    <Flex bgColor='#ffffff' height='48px' padding='6px 12px' boxShadow='0px 4px 12px rgba(0, 0, 0, 0.25);'>
        <Flex align='center'>
            <Image src='./images/dotshelf-logo.svg' h='20px'/>
            <Image />
        </Flex>
        <SearchInput />
        {/*<Directory />
        <SearchInput />
  <RightContent />*/}
    </Flex>
  )
}

export default Navbar;
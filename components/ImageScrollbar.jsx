import { useContext } from 'react';
import Image from 'next/image';
import { Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginRight='1'>
        <Icon
          as={FaArrowAltCircleLeft}
          onClick={() => scrollPrev()}
          fontSize='2xl'
          cursor='pointer'
          d={['none','none','none','block']}
        />
      </Flex>
    );
  }
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginLeft='1'>
        <Icon
          as={FaArrowAltCircleRight}
          onClick={() => scrollNext()}
          fontSize='2xl'
          cursor='pointer'
          d={['none','none','none','block']}
      />
      </Flex>
    );
  }

const ImageScrollbar=({data})=>{
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'auto' }} >
      {data.map((item) => (
         <Flex flexWrap="wrap" width='910px' key={item.id} itemID={item.id} overflow='auto' p='1'>
            <Image key={item.id} alt="property" src={item.url} width={1000} height={500} m="10"  />
         </Flex> 
      ))}
    </ScrollMenu>
  );
}
export default ImageScrollbar

 
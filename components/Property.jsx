import Link from "next/link";
// import Image from "next/image";
import { Image } from '@chakra-ui/react'
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import {FaBed, FaBath} from "react-icons/fa";
import {BsGridFill} from "react-icons/bs"
import {GoVerified} from "react-icons/go"
import millify from "millify";
import DefaultImage from '../assets/images/house.jpg'

const Property =({property:props})=>(
    <Link href={`/property/${props.externalID}`} passHref>
        <Flex flexWrap="wrap" w="350px" m="5" paddingTop="0px" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={props.coverPhoto? props.coverPhoto.url:DefaultImage}  sx={{ width: "400px", height: "260px", borderRadius:"50%"}}/>
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                    <Box paddingRight="3" color="green.500">{props.isVerified && <GoVerified/>}</Box>
                    <Text fontWeight="bold" fontSize="lg">AED {millify(props.price)}{props.rentFrequency && `/${props.rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={props.agency?.logo?.url}/>
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {props.rooms} <FaBed/> | {props.baths} <FaBath/> | {millify(props.area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg">
                    {props.title.length > 30 ? `${props.title.substring(0,30)}...`:props.title}
                </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property;

// coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID
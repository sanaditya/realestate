import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { fetchApi,baseUrl } from "@/utils/fetchApi";
import Property from "../components/Property";

const Banner = (props) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={props.imageUrl} width="500" height="300" alt="banner" />
    <Box p="10">
      <Text color="gray.500" fontSize="sm" fontWeight="medium" paddingBottom="10">
        {props.purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" paddingBottom="10">
        {props.title1}
        <br />
        {props.title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="10" color="gray.700" >
        {props.desc1}
        <br />
        {props.desc2}
      </Text>
      <Button fontSize="xl" p="3">
        <Link href={props.linkName}>{props.buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({propertiesForSale, propertiesForRent}) {

  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and More"
        buttonText="Explorer Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property)=> <Property property={property} key={property.id}/>)}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Hone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and More"
        buttonText="Explorer Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
      {propertiesForSale.map((property)=> <Property property={property} key={property.id}/>)}
      </Flex>
    </Box>
  );
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}
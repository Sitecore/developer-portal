'use client';
import { Box, Heading, Text, UnorderedList } from '@chakra-ui/react';
import { useState } from 'react';
import { CommerceCloud, ContentCloud, EngagementCloud } from '../../data/clouds';
import { CDP, Connect, ContentHubONE, ContentOps, DAM, Discover, OrderCloud, Personalize, Search, Send, XMCloud } from '../../data/products';
import { HexagonCloud } from './HexagonCloud';
import { HexagonItem } from './HexagonItem';
import { HexagonMobileItem } from './HexagonMobileItem';
import styles from './Hexagons.module.css';

export const Hexagons = (): JSX.Element | null => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Box className={styles.honeycomb}>
      <Box as="section" className={`${styles.hasDarkGradient} ${styles.honeycomb_6}`}>
        <Heading as="h2" size={'2xl'}>
          Explore our SaaS DXP
        </Heading>
        <Text my={5} variant={'large'}>
          Sitecore&apos;s SaaS-enabled, composable digital experience platform (DXP) allows you to choose which products you want to implement from search to purchase to post-sale marketing with solutions for Content, Experience, and Commerce.
        </Text>
        <Box className={styles.honeycomb__grid}>
          <UnorderedList className={styles.hexGridTabs} marginLeft={0}>
            <HexagonCloud cloud={ContentCloud} key={1} onClick={() => handleOpen(1)} isOpen={open == 1}>
              <Box className={styles.hexGridTabItemsMobileBlock} display={{ base: 'block', lg: 'none' }}>
                <UnorderedList className={styles.mobileHexItems}>
                  <HexagonMobileItem product={ContentHubONE} />
                  <HexagonMobileItem product={XMCloud} />
                  <HexagonMobileItem product={ContentOps} />
                  <HexagonMobileItem product={DAM} />
                  <HexagonMobileItem product={Search} />
                </UnorderedList>
              </Box>
            </HexagonCloud>

            <HexagonCloud cloud={EngagementCloud} key={2} onClick={() => handleOpen(2)} isOpen={open == 2}>
              <Box className={styles.hexGridTabItemsMobileBlock} display={{ base: 'block', lg: 'none' }}>
                <UnorderedList className={styles.mobileHexItems}>
                  <HexagonMobileItem product={Personalize} />
                  <HexagonMobileItem product={Send} />
                  <HexagonMobileItem product={CDP} />
                  <HexagonMobileItem product={Connect} />
                </UnorderedList>
              </Box>
            </HexagonCloud>

            <HexagonCloud cloud={CommerceCloud} key={3} onClick={() => handleOpen(3)} isOpen={open == 3}>
              <Box className={styles.hexGridTabItemsMobileBlock} display={{ base: 'block', lg: 'none' }}>
                <UnorderedList className={styles.mobileHexItems}>
                  <HexagonMobileItem product={Discover} />
                  <HexagonMobileItem product={OrderCloud} />
                </UnorderedList>
              </Box>
            </HexagonCloud>
          </UnorderedList>

          <Box className={styles.hexgridContainer} display={{ base: 'none', lg: 'block' }}>
            <UnorderedList className={styles.hexgridList} id="hexList">
              <HexagonItem />
              <HexagonItem />
              <HexagonItem product={CDP} />
              <HexagonItem />
              <HexagonItem product={Discover} />
              <HexagonItem />
              <HexagonItem product={Connect} />
              <HexagonItem product={Send} />
              <HexagonItem product={XMCloud} />
              <HexagonItem product={Personalize} />
              <HexagonItem product={DAM} />
              <HexagonItem product={OrderCloud} />
              <HexagonItem />
              <HexagonItem product={Search} />
              <HexagonItem />
              <HexagonItem product={ContentHubONE} />
              <HexagonItem />
              <HexagonItem product={ContentOps} />
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Hexagons;

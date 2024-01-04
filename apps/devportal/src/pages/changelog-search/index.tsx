import ChangelogSearchByMonth from '@/src/components/changelog/search/ChangelogSearchByMonth';
import ChangelogSearchResults from '@/src/components/changelog/search/ChangelogSearchResults';
import { Alert, AlertIcon, Grid, GridItem, HStack, Hide, Text, Tooltip } from '@chakra-ui/react';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import { getUserId } from '@sitecore-search/react';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchChangeLog, { SearchChangeLogParams } from 'sc-changelog/search';
import { ChangeLogSearchFacet, ChangeLogSearchFacetValue } from 'sc-changelog/search/types';
import { ChangelogEntry, ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
import Hero from 'ui/components/common/Hero';
import ProductLogo from 'ui/components/common/ProductLogo';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import { ButtonLink } from 'ui/components/links/ButtonLink';
import { Product } from 'ui/lib/assets';

export default function ChangeSearchlogHome() {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [entriesByMonth, setEntriesByMonth] = useState<ChangelogEntrySummary[]>([]);
  const [facets, setFacets] = useState<ChangeLogSearchFacet[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [isMore, setIsMore] = useState<boolean>(true);
  const limit = 5;
  const uuid = getUserId().uuid;
  const router = useRouter();

  const onNextPage = async () => {
    const searchChangeLogParams: SearchChangeLogParams = {
      path: router.pathname,
      limit: limit,
      offset: offset,
      uuid: uuid,
      facets: facets,
    };

    await callSearchApi(searchChangeLogParams, true);
    setOffset(offset + limit);
  };

  const onFacetChange = async (facet: ChangeLogSearchFacetValue[], facetName: string) => {
    setisLoading(true);
    const newFacets = facets.map((f) => {
      if (f.name == facetName) {
        return {
          ...f,
          value: facet,
        };
      } else {
        return f;
      }
    });

    const searchChangeLogParams: SearchChangeLogParams = {
      path: router.pathname,
      limit: limit,
      offset: 0,
      uuid: uuid,
      facets: newFacets,
    };

    await callSearchApi(searchChangeLogParams, false);
    setFacets(newFacets);
    setOffset(0);
    setisLoading(false);
  };

  const callSearchApi = async (searchChangeLogParams: SearchChangeLogParams, concat: boolean) => {
    const apiResponse = await SearchChangeLog(searchChangeLogParams);
    if (concat) {
      const newEntries = entries.concat(apiResponse.entries);
      setEntries(newEntries);
    } else {
      setEntries(apiResponse.entries);
    }
    setEntriesByMonth(apiResponse.entriesByMonth);
    setFacets(apiResponse.facets);
    setIsMore(apiResponse.isMore);
  };

  useEffect(() => {
    onNextPage();
    setisLoading(false);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
        <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
          <HStack>
            <Text variant={'sm'}>Powered by</Text>
            <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
              <ProductLogo product={Product.ContentHubOne} width={140} height={18} />
            </Link>
            <Text variant={'sm'}>and</Text>
            <Link href="/content-management/search" title="Visit the Sitecore Search product page to learn more">
              <ProductLogo product={Product.Search} width={66} height={18} />
            </Link>
          </HStack>
        </Hero>

        <VerticalGroup>
          <CenteredContent py={8} gap={8}>
            <Alert status="info" alignItems="center">
              <AlertIcon />
              <Tooltip label="Go to the overview of current release notes" aria-label="A tooltip">
                <Link href="/changelog/current" title="View the list of current release notes per product">
                  You are viewing the Sitecore Cloud changelog. To see release notes for Sitecore products not yet listed here, click here.
                </Link>
              </Tooltip>
            </Alert>
            <Grid templateColumns="repeat(5, 1fr)" gap={14}>
              <GridItem colSpan={{ base: 5, md: 3 }}>
                <ChangelogSearchResults entries={entries} isMore={isMore} facets={facets} isLoading={isLoading} onNextPage={onNextPage} onFacetChange={onFacetChange} />
              </GridItem>
              <Hide below="md">
                <GridItem colSpan={{ base: 2 }}>
                  <ButtonLink text={'RSS'} href={`${router.pathname}/rss.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <ButtonLink text={'ATOM'} href={`${router.pathname}/atom.xml`} variant={'ghost'} leftIcon={<Icon path={mdiRss} size={1} />} rightIcon={undefined} />
                  <ChangelogSearchByMonth isLoading={isLoading} entriesByMonth={entriesByMonth} />
                </GridItem>
              </Hide>
            </Grid>
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </>
  );
}

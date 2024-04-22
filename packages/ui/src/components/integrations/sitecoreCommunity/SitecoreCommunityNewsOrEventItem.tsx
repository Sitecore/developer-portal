import { Card, CardFooter, CardHeader, Heading, Link, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link';
import {ConditionalWrapper} from '@scdp/ui/components';
import { translateDate } from '@scdp/ui/lib';
import { SITECORE_COMMUNITY_URL } from './sitecore-community.constants';

type SitecoreCommunityNewsOrEventItemProps = {
  categoryTitle?: 'News and Announcements' | 'Event';
  commentCount?: string;
  endDate?: string;
  location?: string;
  startDate: string;
  title: string;
  viewCount?: string;
  virtualUrl?: string;
  url: string;
};

export type DateIconVariant = 'simple' | 'calendar';

export type DateIconProps = {
  type: DateIconVariant;
  className?: string;
  date: string;
};

type DateOutputProps = {
  startDate: string;
  endDate?: string;
};
const DateOutput = ({ startDate, endDate }: DateOutputProps): JSX.Element => {
  const startDateString = translateDate(startDate);
  const endDateString = endDate ? translateDate(endDate) : '';
  if (!endDateString || startDateString === endDateString) {
    return <p className="text-xs">{startDateString}</p>;
  }

  return (
    <p className="text-xs">
      {startDateString} <span className="sr-only">to</span>
      <span aria-hidden="true">-</span> {endDateString}
    </p>
  );
};

export const SitecoreCommunityNewsOrEventItem = ({ categoryTitle, commentCount, endDate, location, startDate, title, url, viewCount, virtualUrl }: SitecoreCommunityNewsOrEventItemProps): JSX.Element => {
  return (
    <LinkBox as="article" display="contents">
      <Card variant={'outline'} size="lg" w={'full'} justifyContent={'space-between'} layerStyle="interactive.raise">
        <CardHeader paddingBottom={0}>
          {!!categoryTitle && <Heading variant="section">{categoryTitle}</Heading>}

          <Heading size={'sm'} my={4}>
            <LinkOverlay as={NextLink} href={`${SITECORE_COMMUNITY_URL}${url}`} isExternal={true} rel="noreferrer noopener" target="_blank">
              {title}
            </LinkOverlay>
          </Heading>
        </CardHeader>
        <CardFooter justify="space-between" flexWrap="wrap">
          <DateOutput startDate={startDate} endDate={endDate} />

          {!!location && (
            <p className="mt-1 text-xs">
              Location:{' '}
              <ConditionalWrapper
                condition={!!virtualUrl}
                wrapper={(children) => (
                  <a className="relative z-20 hover:underline" href={virtualUrl} rel="noreferrer noopener" target="_blank">
                    {children}
                  </a>
                )}
              >
                <strong className="font-semibold">{location}</strong>
              </ConditionalWrapper>
            </p>
          )}

          {!!commentCount && !!viewCount && (
            <p className="mt-2 text-xs">
              <span className="mr-6">{commentCount} comments</span> {viewCount} views
            </p>
          )}
        </CardFooter>
      </Card>
    </LinkBox>
  );
};

export const SitecoreCommunityNewsOrEventItemSidebar = ({ commentCount, startDate, title, url, viewCount }: SitecoreCommunityNewsOrEventItemProps): JSX.Element => {
  return (
    <li>
      <div className="flex items-start">
        <DateIcon date={startDate} type="calendar" />
        <div className="">
          <span className={`hover:text-violet dark:hover:text-teal  font-semibold hover:underline`}>
            <Link href={url} title={title}>
              {title}
            </Link>
          </span>

          <div className="flex items-start">
            <div className="flex flex-row items-center my-1 space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex flex-row gap-5">
                <div className={` text-sm hover:underline`}>
                  <div className="text-xs">{commentCount} comments</div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className={`text-xs`}>{viewCount} views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const DateIcon = ({ date, className, type }: DateIconProps): JSX.Element => {
  if (type == 'calendar')
    return (
      <div className={`mr-4 w-10 flex-none rounded-t pb-2 text-center shadow-lg lg:rounded-l lg:rounded-t-none ${className}`}>
        <div className="w-full py-1 text-2xs bg-primary-100 text-primary-900 dark:bg-teal-800 dark:text-teal-100">{new Date(date).toLocaleString('en-US', { month: 'short' })}</div>
        <div className="pt-1 bg-white border-l border-r border-white dark:text-teal-900">
          <span className="text-lg font-semibold leading-tight">{new Date(date).toLocaleString('en-US', { day: '2-digit' })}</span>
        </div>
      </div>
    );

  return (
    <div className="p-2 mr-4 leading-tight text-center border bg-theme-bg-alt text-theme-text border-theme-border-alt bg-primary">
      <time className={`flex items-center justify-center text-xs`} dateTime="2022-10-21T15:48:00.000Z">
        {new Date(date).getDay()}
        <br />
        {new Date(date).toLocaleString('en-US', { month: 'short' })}
      </time>
    </div>
  );
};

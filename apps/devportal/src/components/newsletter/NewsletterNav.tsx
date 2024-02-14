import { Button, ButtonGroup, Heading, Wrap } from '@chakra-ui/react';
import { NewsletterPath } from '@lib/staticPaths';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { translateDateAsYearMonth } from 'ui/lib/utils/dateUtil';

interface NewsletterNavProps {
  paths: NewsletterPath[];
  currentYear: string;
  currentMonth: string;
}

const NewsletterNav = ({ paths, currentYear, currentMonth }: NewsletterNavProps) => {
  const router = useRouter();

  const links = paths
    .map((item) => ({
      month: parseInt(item.params.month, 10),
      year: parseInt(item.params.year, 10),
      active: parseInt(currentMonth, 10) == parseInt(item.params.month, 10) && parseInt(currentYear, 10) == parseInt(item.params.year, 10),
      // Set the dates as the 3rd of each month to avoid having to deal with timezones rolling it backwards
      text: translateDateAsYearMonth(`${item.params.year}-${item.params.month}-03`),
      href: `/newsletter/${item.params.year}/${item.params.month}`,
    }))
    .sort((a, b) => {
      const yearDiff = b.year - a.year;
      return yearDiff !== 0 ? yearDiff : b.month - a.month;
    });

  return (
    <Wrap as={'nav'} direction="column" position={'sticky'} top={'9rem'}>
      <Heading variant={'section'} size={'sm'} mb={8}>
        Newsletters
      </Heading>
      <ButtonGroup variant="navigation" orientation="vertical" spacing="1" mx="-2" mb="4" pos={'static'}>
        {links.map((link, i) => {
          return (
            <Button as={NextLink} href={link.href} key={i} isActive={router.asPath.includes(link.href)}>
              {link.text}
            </Button>
          );
        })}
      </ButtonGroup>
    </Wrap>
  );
};

export default NewsletterNav;

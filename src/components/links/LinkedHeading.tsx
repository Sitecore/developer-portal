import { HTMLChakraProps, Icon, chakra } from '@chakra-ui/react';

export const LinkedHeading = (props: HTMLChakraProps<'h2'>) => (
  <chakra.h2 data-group="" {...props}>
    <span className="content">{props.children}</span>
    {props.id && (
      <chakra.a aria-label="anchor" fontWeight="normal" color="chakra-subtle-text" outline="none" opacity={0} _groupHover={{ opacity: 1 }} ml="0.375rem" href={`?details=${props.id}`}>
        <Icon viewBox="0 0 16 16" focusable="false" aria-hidden="true" color="currentColor" w="4" h="4" border={0}>
          <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z" />
        </Icon>
      </chakra.a>
    )}
  </chakra.h2>
);

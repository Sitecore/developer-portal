import { Meta, StoryFn } from '@storybook/react';
import { Article, ArticleProps } from './Article';

export default {
  title: 'Components/Cards/Article',
  component: Article,
} as Meta;

const Template: StoryFn<ArticleProps> = (args: ArticleProps) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Article',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  linktext: 'Sitecore',
  link: 'https://developers.sitecore.com',
};

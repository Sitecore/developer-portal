import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

export type TabsProps = {
  title: string;
  tabs: Tab[];
};

export type Tab = {
  title: string;
  content: string;
};

export const Tabs = ({ title, tabs }: TabsProps): JSX.Element => (
  <>
    <h2>{title}</h2>

    <Tab.Group>
      <Tab.List className="tablist">
        <Tab as={Fragment}>
          <button className="tab">Next.js</button>
        </Tab>
        <Tab as={Fragment}>
          <button className="tab">Svelte</button>
        </Tab>
        <Tab as={Fragment}>
          <button className="tab">Vue.js</button>
        </Tab>
        <Tab as={Fragment}>
          <button className="tab">Astro</button>
        </Tab>
      </Tab.List>
      <Tab.Panels className="panels">
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
        {/* ... */}
      </Tab.Panels>

      {/*
            <Tab.List className="tablist">
        {tabs.map((item, index) => {
          return (
            <Tab as={Fragment} key={index}>
              <button className="tab">{item.title}</button>
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels className="panels">
        {tabs.map((item, index) => {
          return <Tab.Panel key={index}>{item.content}</Tab.Panel>;
        })}
      </Tab.Panels>
      */}
    </Tab.Group>
  </>
);

import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

export type TabsProps = {
  children: any[];
};

// Parent component
export const Tabs = ({ children }: TabsProps) => {
  const titles: string[] = children.map((x) => x.props.title);
  const content = children.map((x) => x.props.children);

  return (
    <Tab.Group>
      <Tab.List>
        {titles.map((item, index) => {
          return (
            <Tab as={Fragment} key={index}>
              <button className="tab">{item}</button>
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {content.map((item, index) => {
          return (
            <Tab.Panel key={index} className="panels">
              {item}
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};
export default Tabs;

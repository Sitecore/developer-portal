import { useRouter } from 'next/router';
import { LinkValue } from '../../common/types/link-value';

type DropDownProps = {
  options: LinkValue[];
};

export const Dropdown = ({ options }: DropDownProps) => {
  const router = useRouter();

  return (
    <label className="flex items-center text-xs font-semibold">
      Filter by:
      <select
        onChange={(event) => {
          event.preventDefault();

          router.push(router.asPath + '/' + event.target.value, undefined);
        }}
        className="bg-theme-bg `text-theme-text ml-2 border-2 p-2 font-semibold"
      >
        {options.map((item, index) => {
          return (
            <option value={item.href} key={index}>
              {item.text}
            </option>
          );
        })}
      </select>
    </label>
  );
};

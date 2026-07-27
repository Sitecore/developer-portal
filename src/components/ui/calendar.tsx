'use client';

import { Icon } from '@/src/lib/icon';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import * as React from 'react';

import { type DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import { Button, buttonVariants } from '@/src/components/ui/button';
import { cn } from '@/src/lib/util/index';
import { ChevronDownIcon } from 'lucide-react';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & { buttonVariant?: React.ComponentProps<typeof Button>['variant'] }) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      captionLayout={captionLayout}
      formatters={{ formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }), ...formatters }}
      classNames={{
        root: cn('w-fit bg-card', defaultClassNames.root),
        months: cn('flex gap-4 flex-col md:flex-row relative', defaultClassNames.months),
        month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
        nav: cn('flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between', defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: 'ghost', colorScheme: 'neutral', size: 'icon' }), 'size-icon bg-transparent p-0 opacity-50 hover:opacity-100'),
        button_next: cn(buttonVariants({ variant: 'ghost', colorScheme: 'neutral', size: 'icon' }), 'size-icon bg-transparent p-0 opacity-50 hover:opacity-100 '),
        month_caption: cn('flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)', defaultClassNames.month_caption),
        dropdowns: cn('w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5', defaultClassNames.dropdowns),
        dropdown_root: cn('relative has-focus:border-ring border px-2 border-input has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md', defaultClassNames.dropdown_root),
        dropdown: cn('absolute bg-popover inset-0 opacity-0 pl-4 scrollbar-hidden w-full flex justify-center items-center  ', defaultClassNames.dropdown),
        caption_label: cn('select-none font-medium', captionLayout === 'label' ? 'text-sm' : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5', defaultClassNames.caption_label),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn('text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none', defaultClassNames.weekday),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        week_number_header: cn('select-none w-(--cell-size)', defaultClassNames.week_number_header),
        week_number: cn('text-[0.8rem] select-none text-muted-foreground', defaultClassNames.week_number),
        day_range_start: 'day-range-start aria-selected:bg-primary-500 aria-selected:text-primary-foreground rounded-l-md rounded-r-none',
        day_range_end: 'day-range-end aria-selected:bg-primary-500 aria-selected:text-primary-foreground rounded-r-md rounded-l-none',

        range_start: 'day-range-start aria-selected:bg-primary-500 aria-selected:text-primary-foreground rounded-l-md rounded-r-none',
        range_middle: 'aria-selected:bg-primary-bg aria-selected:text-body-text rounded-none',
        range_end: 'day-range-end aria-selected:bg-primary-500 aria-selected:text-primary-foreground rounded-r-md rounded-l-none',
        today: cn('bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none', defaultClassNames.today),
        outside: cn('text-muted-foreground aria-selected:text-muted-foreground', defaultClassNames.outside),
        disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <Icon path={mdiChevronLeft} size={0.9} className={cn('text-neutral size-4', className)} {...props} />;
          }

          if (orientation === 'right') {
            return <Icon path={mdiChevronRight} size={0.9} className={cn('text-neutral size-4', className)} {...props} />;
          }
          return <ChevronDownIcon className={cn('size-4', className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      aria-label={`Select ${day.date.toLocaleDateString()}`}
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected ? 'true' : 'false'}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      aria-pressed={modifiers.selected || false}
      className={cn(
        buttonVariants({ variant: 'ghost', colorScheme: 'neutral' }),
        'hover:rounded-md size-8 p-0 font-normal border border-solid border-transparent rounded-md text-body-text transition-none',
        !modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle && 'hover:bg-primary hover:text-inverse-text',
        modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle && 'bg-primary-500 text-inverse-text rounded-l-md hover:bg-primary-600 hover:text-inverse-text',
        modifiers.range_start && 'bg-primary-500 text-inverse-text rounded-l-md hover:bg-primary-600 hover:text-inverse-text',
        modifiers.range_middle && 'bg-primary-bg text-primary-fg hover:bg-primary hover:text-inverse-text rounded-none',
        modifiers.range_end && 'bg-primary-500 text-inverse-text rounded-r-md hover:bg-primary-600 hover:text-inverse-text',
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

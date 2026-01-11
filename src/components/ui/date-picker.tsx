"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { mdiCalendarBlankOutline } from "@mdi/js";
import { Icon } from "@/src/lib/icon";
import type { DateRange } from "react-day-picker";

import { cn } from "@/src/lib/util/index";
import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import type { DropdownProps } from "react-day-picker";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/components/ui/select";

export function CustomDropdown({
  options = [],
  value,
  onChange,
  disabled,
  name,
  id,
}: DropdownProps) {
  return (
    <Select
      disabled={disabled}
      name={name}
      value={value != null ? String(value) : ""}
      onValueChange={(val) => {
        const e = {
          target: { value: val },
        } as unknown as React.ChangeEvent<HTMLSelectElement>;
        onChange?.(e);
      }}
    >
      <SelectTrigger
        id={id}
        size="sm"
        className="z-50 px-3 text-sm [&_svg:not([class*='text-'])]:text-accent-foreground bg-transparent dark:bg-transparent dark:hover:bg-transparent"
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent className="rounded-md borde p-0 min-w-20">
        {options.map(({ value: v, label, disabled }) => (
          <SelectItem
            key={String(v)}
            value={String(v)}
            disabled={disabled}
            className="cursor-pointer px-3 py-1.5 text-sm"
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          colorScheme={"neutral"}
          className={cn(
            "border-input border-1 data-[state=open]:border-1 data-[state=open]:border-primary rounded-md text-md data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 bg-body-bg px-3 py-2 whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 h-10",
            !date && "text-muted-foreground"
          )}
        >
          <Icon
            path={mdiCalendarBlankOutline}
            size={1}
            className="text-muted-foreground"
          />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          captionLayout="dropdown"
          components={{ Dropdown: CustomDropdown }}
        />
      </PopoverContent>
    </Popover>
  );
}

function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          colorScheme={"neutral"}
          className={cn(
            "border-input border-1 data-[state=open]:border-1 data-[state=open]:border-primary rounded-md text-md data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 bg-body-bg px-3 py-2 whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 h-10",
            !date && "text-muted-foreground"
          )}
        >
          <Icon
            path={mdiCalendarBlankOutline}
            size={1}
            className="text-muted-foreground"
          />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          captionLayout="dropdown"
          components={{ Dropdown: CustomDropdown }}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePickerSimple, DatePickerWithRange };
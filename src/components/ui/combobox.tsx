"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon, ChevronsUpDown } from "lucide-react";
import { mdiPlus } from "@mdi/js";
import { Icon } from "@/src/lib/icon";

import { cn } from "@/src/lib/util/index";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";

type Framework = {
  value: string;
  label: string;
};

type FrameworkComboboxProps = {
  frameworks: Framework[];
};

type User = {
  id: string;
  username: string;
  avatar?: string;
};

type UserComboboxProps = {
  users: User[];
  selectedUserId: string;
};

type Timezone = {
  label: string;
  timezones: readonly {
    value: string;
    label: string;
  }[];
};

type TimezoneComboboxProps = {
  timezones: readonly Timezone[];
  selectedTimezone: Timezone["timezones"][number];
};

function FrameworkCombobox({ frameworks }: FrameworkComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          colorScheme="neutral"
          role="combobox"
          aria-expanded={open}
          aria-label="Select framework"
          className={cn(
            "w-full justify-between md:max-w-[200px] rounded-md",
            open && "ring-primary ring-[2px]"
          )}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function UserCombobox({ users, selectedUserId }: UserComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedUserId);

  const selectedUser = React.useMemo(
    () => users.find((user) => user.id === value),
    [value, users]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          colorScheme="neutral"
          role="combobox"
          aria-expanded={open}
          aria-label="Select user"
          className={cn(
            "w-full justify-between px-2 md:max-w-[200px] rounded-md",
            open && "ring-primary ring-[2px]"
          )}
        >
          {selectedUser ? (
            <div className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage
                  src={selectedUser.avatar}
                  alt={`${selectedUser.username} avatar`}
                />
                <AvatarFallback>{selectedUser.username[0]}</AvatarFallback>
              </Avatar>
              {selectedUser.username}
            </div>
          ) : (
            "Select user..."
          )}
          <ChevronsUpDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandList className="max-h-[300px] pb-12 relative">
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {users.map((user) => (
                <CommandItem
                  key={user.id}
                  value={user.username}
                  onSelect={(currentValue) => {
                    const selected = users.find(
                      (u) => u.username.toLowerCase() === currentValue.toLowerCase()
                    );
                    if (selected) {
                      setValue(selected.id === value ? "" : selected.id);
                    }
                    setOpen(false);
                  }}
                >
                  <Avatar className="size-5">
                    <AvatarImage
                      src={user.avatar}
                      alt={`${user.username} avatar`}
                    />
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                  </Avatar>
                  {user.username}
                  <CheckIcon
                    className={cn(
                      "ml-auto",
                      value === user.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="absolute bottom-0 left-0 right-0 border-x border-b bg-background p-2 rounded-b-md z-10">
            <Button variant="ghost" size="sm" colorScheme="primary" aria-label="Create new user">
              <Icon path={mdiPlus} size={0.9} className="" />
              Create user
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function TimezoneCombobox({
  timezones,
  selectedTimezone,
}: TimezoneComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedTimezone.value);

  const selectedGroup = React.useMemo(
    () =>
      timezones.find((group) =>
        group.timezones.find((tz) => tz.value === value)
      ),
    [value, timezones]
  );

  const selectedTimezoneLabel = React.useMemo(
    () => selectedGroup?.timezones.find((tz) => tz.value === value)?.label,
    [value, selectedGroup]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          colorScheme="neutral"
          className={cn(
            "h-12 w-full justify-between px-2.5 md:max-w-[200px] rounded-md",
            open && "ring-primary ring-[2px]"
          )}
        >
          {selectedTimezone ? (
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-muted-foreground text-xs font-normal">
                {selectedGroup?.label}
              </span>
              <span>{selectedTimezoneLabel}</span>
            </div>
          ) : (
            "Select timezone"
          )}
          <ChevronDownIcon className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandInput placeholder="Search timezone..." />
          <CommandList className="max-h-[300px] pb-12 relative">
            <CommandEmpty>No timezone found.</CommandEmpty>
            {timezones.map((region, index) => (
              <React.Fragment key={region.label}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup
                  heading={region.label}
                  className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase"
                >
                  {region.timezones.map((timezone) => (
                    <CommandItem
                      key={timezone.value}
                      value={timezone.value}
                      onSelect={(currentValue) => {
                        setValue(
                          currentValue as Timezone["timezones"][number]["value"]
                        );
                        setOpen(false);
                      }}
                    >
                      {timezone.label}
                      <CheckIcon
                        className="ml-auto opacity-0 data-[selected=true]:opacity-100"
                        data-selected={value === timezone.value}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </React.Fragment>
            ))}
          </CommandList>
          <div className="absolute bottom-0 left-0 right-0 border-x border-b bg-background p-2 rounded-b-md z-10">
            <Button variant="ghost" size="sm" colorScheme="primary" aria-label="Create new timezone">
              <Icon path={mdiPlus} size={0.9} className="" />
              Create timezone
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function ComboboxWithCheckbox({ frameworks }: FrameworkComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<
    Framework[]
  >([]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          colorScheme="neutral"
          role="combobox"
          aria-expanded={open}
          aria-label="Select frameworks (multi-select)"
          className={cn(
            "w-fit min-w-[280px] justify-between rounded-md",
            open && "ring-primary ring-[2px]"
          )}
        >
          {selectedFrameworks.length > 0
            ? selectedFrameworks.map((framework) => framework.label).join(", ")
            : "Select frameworks (multi-select)..."}
          <ChevronsUpDown className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setSelectedFrameworks(
                      selectedFrameworks.some((f) => f.value === currentValue)
                        ? selectedFrameworks.filter(
                            (f) => f.value !== currentValue
                          )
                        : [...selectedFrameworks, framework]
                    );
                  }}
                >
                  <div
                    className="border-input data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[selected=true]:text-inverse-text pointer-events-none size-4 shrink-0 rounded-[4px] border transition-all select-none *:[svg]:opacity-0 data-[selected=true]:*:[svg]:opacity-100"
                    data-selected={selectedFrameworks.some(
                      (f) => f.value === framework.value
                    )}
                  >
                    <CheckIcon className="size-3.5 text-current" />
                  </div>
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export {
  FrameworkCombobox,
  UserCombobox,
  TimezoneCombobox,
  ComboboxWithCheckbox,
};

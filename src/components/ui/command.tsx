'use client';

import { Icon } from '@/src/lib/icon';
import { mdiClose, mdiMagnify } from '@mdi/js';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';

import { Button } from '@/src/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/src/components/ui/dialog';
import { cn } from '@/src/lib/util/index';

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return <CommandPrimitive data-slot="command" className={cn('flex overflow-hidden flex-col w-full h-full rounded-md bg-popover text-popover-foreground', className)} {...props} />;
}

function CommandDialog({ title = 'Command Palette', description = 'Search for a command to run...', children, ...props }: React.ComponentProps<typeof Dialog> & { title?: string; description?: string }) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
          <DialogPrimitive.Close style={{ display: 'none' }} />
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  const [value, setValue] = React.useState('');

  const handleClear = () => {
    setValue('');
  };

  return (
    <div data-slot="command-input-wrapper" className="relative px-3 my-2">
      <CommandPrimitive.Input
        value={value}
        onValueChange={setValue}
        data-slot="command-input"
        aria-label={props['aria-label'] || 'Search commands'}
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-inverse-text dark:bg-input/30 flex h-8 w-full min-w-0 rounded-sm border bg-body-bg py-1 pr-10 pl-9 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          'rounded-md text-md font-regular placeholder-blackAlpha-400 border-1 focus:border',
          className
        )}
        {...props}
      />
      <Icon path={mdiMagnify} className="absolute left-6 top-1/2 opacity-50 -translate-y-1/2 shrink-0 size-6" />
      {value && (
        <Button onClick={handleClear} variant="ghost" size="icon" colorScheme="neutral" aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 text-subtle-text hover:text-body-text focus:outline-none">
          <Icon path={mdiClose} size={1} />
        </Button>
      )}
    </div>
  );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return <CommandPrimitive.List data-slot="command-list" className={cn('overflow-y-auto overflow-x-hidden max-h-[300px] scroll-py-1', className)} {...props} />;
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty data-slot="command-empty" className="py-6 text-sm text-center" {...props} />;
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn('text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium', className)}
      {...props}
    />
  );
}

function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return <CommandPrimitive.Separator data-slot="command-separator" className={cn('-mx-1 h-px bg-border', className)} {...props} />;
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:text-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-neutral-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return <span data-slot="command-shortcut" className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />;
}

export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut };

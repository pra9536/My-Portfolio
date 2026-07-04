'use client'

import { cn } from '@/lib/utils'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

/* ================= ROOT ================= */

function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root {...props} />
}

function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger {...props} />
}

function SheetClose(
  props: React.ComponentProps<typeof SheetPrimitive.Close>
) {
  return <SheetPrimitive.Close {...props} />
}

/* ================= PORTAL & OVERLAY ================= */

function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>
) {
  return <SheetPrimitive.Portal {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
        className
      )}
      {...props}
    />
  )
}

/* ================= CONTENT (NO DEFAULT CLOSE ICON ❌) ================= */

function SheetContent({
  className,
  side = 'right',
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(
          'fixed z-50 bg-background shadow-xl flex flex-col',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'transition ease-in-out',
          side === 'right' &&
            'inset-y-0 right-0 h-full w-[85%] sm:w-[400px] border-l data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
          side === 'left' &&
            'inset-y-0 left-0 h-full w-[85%] sm:w-[400px] border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
          side === 'top' &&
            'inset-x-0 top-0 h-auto border-b data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
          side === 'bottom' &&
            'inset-x-0 bottom-0 h-auto border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

/* ================= HEADER / FOOTER ================= */

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mt-auto p-4', className)}
      {...props}
    />
  )
}

/* ================= TITLE / DESCRIPTION ================= */

function SheetTitle(
  props: React.ComponentProps<typeof SheetPrimitive.Title>
) {
  return (
    <SheetPrimitive.Title
      className="text-lg font-semibold"
      {...props}
    />
  )
}

function SheetDescription(
  props: React.ComponentProps<typeof SheetPrimitive.Description>
) {
  return (
    <SheetPrimitive.Description
      className="text-sm text-muted-foreground"
      {...props}
    />
  )
}

/* ================= EXPORTS ================= */

export {
  Sheet, SheetClose,
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger
}


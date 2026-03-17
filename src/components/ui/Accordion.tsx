import { ReactNode, useState } from 'react'

interface AccordionItemProps {
  id: string
  title: string
  children: ReactNode
}

export function AccordionItem({ id, title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-steel-grey/20">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-charcoal"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{title}</span>
        <span className="text-xl leading-none text-steel-grey">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={id} className="pb-4 text-sm text-mid-grey">
          {children}
        </div>
      )}
    </div>
  )
}


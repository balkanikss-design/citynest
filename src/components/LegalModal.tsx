import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface LegalModalProps {
  title: string
  children: ReactNode
  onClose: () => void
}

export function LegalModal({ title, children, onClose }: LegalModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal="true"
        role="dialog"
        aria-label={title}
      >
        <motion.div
          className="relative max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-4">
            <h2 className="text-sm font-semibold text-charcoal">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-mid-grey hover:bg-page hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="scrollbar-thin max-h-[calc(80vh-3.5rem)] space-y-4 overflow-y-auto px-6 py-5 text-sm text-mid-grey">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


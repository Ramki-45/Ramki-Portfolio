// src/components/ui/toaster.jsx
import * as Toast from '@radix-ui/react-toast'
import { ToastMessage } from './toast'
import { useToastStore } from '../../hooks/useToast'

export function Toaster() {
  const { open, setOpen, title, description } = useToastStore()

  return (
    <Toast.Provider swipeDirection="right">
      <ToastMessage
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
      />
      <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 w-[300px] z-50" />
    </Toast.Provider>
  )
}

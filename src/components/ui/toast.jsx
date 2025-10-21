// src/components/ui/toast.jsx
import * as Toast from '@radix-ui/react-toast'

export function ToastMessage({ open, onOpenChange, title, description }) {
  return (
    <Toast.Root
      open={open}
      onOpenChange={onOpenChange}
      className="bg-gray-900 text-white rounded p-4 shadow-lg flex flex-col gap-1"
      duration={3000} // auto close after 3 seconds
    >
      <Toast.Title className="font-bold">{title}</Toast.Title>
      {description && (
        <Toast.Description className="text-sm text-gray-300">
          {description}
        </Toast.Description>
      )}
    </Toast.Root>
  )
}

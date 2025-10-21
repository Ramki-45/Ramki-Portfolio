// src/hooks/useToast.js
import { create } from 'zustand'

export const useToastStore = create((set) => ({
  open: false,
  title: '',
  description: '',
  setOpen: (open) => set({ open }),
  showToast: ({ title, description }) =>
    set({ open: true, title, description }),
}))

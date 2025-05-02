import { create } from "zustand";
import { ReactNode } from "react";

export interface InfoModal {
  isActivated: boolean | null;
  modalTitle: ReactNode | null;
  modalBody: ReactNode | null;
  blurredColor: string | null;
}

// Tipado del estado global
interface Modal {
  isActivated: boolean | null;
  modalTitle: ReactNode | null;
  modalBody: ReactNode | null;
  blurredColor: string | null;
  setModal: (
    isActivated: boolean,
    modalTitle?: ReactNode,
    modalBody?: ReactNode,
    blurredColor?: string
  ) => void;
}

// Crear el store
export const useModal = create<Modal>((set) => ({
  isActivated: null,
  modalTitle: null,
  modalBody: null,
  blurredColor: null,
  setModal: (isActivated, modalTitle, modalBody = null, blurredColor) =>
    set({
      isActivated,
      modalTitle,
      modalBody,
      blurredColor,
    }),
}));

declare module "toastify-js" {
  interface ToastifyOptions {
    text: string;
    duration?: number;
    destination?: string;
    newWindow?: boolean;
    close?: boolean;
    gravity?: "top" | "bottom";
    position?: "left" | "center" | "right";
    backgroundColor?: string;
    stopOnFocus?: boolean;
    onClick?: () => void;
  }

  export default function Toastify(options: ToastifyOptions): {
    showToast: () => void;
  };
}

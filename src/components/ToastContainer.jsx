import { Toast } from "./ui/Toast";
export const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed bottom-20 -translate-x-1/2 md:translate-x-0 left-1/2 md:left-auto md:bottom-18 md:right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} />
      ))}
    </div>
  );
};

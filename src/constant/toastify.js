import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const toastError = (message) => {
  return toast.error(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const toastSuccess = (message) => {
  return toast.success(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
};

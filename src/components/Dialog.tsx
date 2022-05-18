import { BsX } from "react-icons/bs";

interface IDialogProps {
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
}
export default function Dialog({ open, onClose, children }: IDialogProps) {
  if (!open) {
    return <></>;
  }
  return (
    <div
      className="fixed inset-0 z-50 overflow-auto  flex rounded-lg "
      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
    >
      <div className=" p-8 bg-white w-full max-w-lg m-auto shadow-xl flex-col flex border-2 rounded-lg">
        <div>{children}</div>
      </div>
    </div>
  );
}

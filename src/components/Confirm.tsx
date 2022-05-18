import { Button } from "./Button";
import Dialog from "./Dialog";
interface ConfirmProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
  onConfirm: Function;
}

export function Confirm({
  open,
  onClose,
  title,
  children,
  onConfirm,
}: ConfirmProps) {
  if (!open) {
    return <></>;
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-end items-center">
        <div className="p-1">
          <Button onClick={() => onClose()} color="secondary">
            No
          </Button>
        </div>
        <div className="p-1">
          <Button
            color="danger"
            onClick={() => {
              onClose();
              onConfirm();
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

import { Button } from "./Button";
import Dialog from "./Dialog";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
  onConfirm: () => void;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  onConfirm,
}: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl font-semibold h-12 bg-primary-100 w-full text-white rounded-lg uppercase flex items-center justify-center">
        {title}
      </h2>
      <div className="py-5">{children}</div>
      <div className="grid  grid-cols-2">
        <div className="p-1">
          <Button
            textSize="uppercase"
            onClick={() => onClose()}
            color="secondary"
          >
            Cancel
          </Button>
        </div>
        <div className="p-1 ">
          <Button
            color="primary"
            textSize="uppercase"
            onClick={() => {
              // onClose();
              onConfirm();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

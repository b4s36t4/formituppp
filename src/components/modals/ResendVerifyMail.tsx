import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onChange?: (open: boolean) => void;
  onClick: () => void;
}

export const ResendVerifyMail = ({ open, onChange, onClick }: Props) => {
  const onVerify = () => {
    window.location.reload();
  };

  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent>
        <p className="text-2xl">Please verify your email</p>
        <p className="text-base">
          Check your inbox to verify your email.
          <Button onClick={onClick} variant={"link"} className="pl-1">
            Resend
          </Button>
        </p>

        <Button onClick={onVerify}>Verify</Button>
      </DialogContent>
    </Dialog>
  );
};

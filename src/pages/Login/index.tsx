import { useAuthProvider } from "@/Provider/Auth/hook";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRedirectAuth } from "@/hooks/useRedirectonAuth";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const Login = () => {
  useRedirectAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthProvider();

  const onLogin = async () => {
    const data = { email, password };
    const res = await login({ ...data });

    if (res && !res?.emailVerified) {
      toast("Email not verified.");
      return;
    }
  };

  return (
    <div className="m-auto flex items-center justify-center h-full">
      <Card className="w-2/3 md:w-2/5">
        <CardHeader>
          <CardTitle>LogIn</CardTitle>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <Input
            placeholder="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            type="password"
            className="mt-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={onLogin} className="mt-4">
            Login
          </Button>
        </CardContent>
      </Card>
      {/* <ResendVerifyMail
        open={modal}
        onChange={(open) => setModal(open)}
        onClick={resendVerifyEmail}
      /> */}
    </div>
  );
};

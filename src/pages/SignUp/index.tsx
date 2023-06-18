import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import z, { ZodError } from "zod";
import { toast } from "react-hot-toast";
import { useAuthProvider } from "@/Provider/Auth/hook";
import { useRedirectAuth } from "@/hooks/useRedirectonAuth";

const SignUpDataSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: "Password can not be null" })
    .min(8, "Password length must be 8 characters"),
});

export const SignUp = () => {
  useRedirectAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuthProvider();

  const onSignup = async () => {
    const data = { email, password };
    await signup(data);
    try {
      SignUpDataSchema.parse(data);
    } catch (e) {
      if (e instanceof ZodError) {
        e.errors.forEach((_error) => {
          toast.error(_error.message, { duration: 1000 });
        });
      }
    }
  };

  return (
    <div className="m-auto flex items-center justify-center h-full">
      <Card className="w-2/3 md:w-2/5">
        <CardHeader>
          <CardTitle>Sign-Up</CardTitle>
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
          <Button onClick={onSignup} className="mt-4">
            Signup
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <>
      <div className="w-full xl:min-h-[800px] flex justify-center items-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold mt-10 md:mt-0">
              Forgot Password
            </h1>
            <p className="text-balance text-muted-foreground">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Remember your password?{" "}
            <Link href="/Login" className="underline">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

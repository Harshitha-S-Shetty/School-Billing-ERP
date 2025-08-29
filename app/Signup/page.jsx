import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex  items-center justify-center py-12 px-4 md:px-0">
          <div className="mx-auto grid w-[400px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Create an Account</h1>
              <p className="text-balance text-muted-foreground">
                Sign up to start managing your school's finances efficiently
              </p>
            </div>
            <div className="grid gap-4">
              {/* <div className="grid gap-2">
                <Label htmlFor="schoolName">School Name</Label>
                <Input
                  id="schoolName"
                  type="text"
                  placeholder="Enter your school's name"
                  required
                />
              </div> */}
              <div className="grid gap-2">
                <Label htmlFor="adminName">Administrator Name</Label>
                <Input
                  id="adminName"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@school.edu"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Re-enter New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter here again"
                  required
                />
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="schoolType">School Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select school type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary School</SelectItem>
                    <SelectItem value="secondary">Secondary School</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/Login" className="underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/img1.png"
            alt="School Building"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default page;

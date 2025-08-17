"use client";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { error: "Username must be at least 2 characters!" })
    .max(50),
  email: z.email({ pattern: z.regexes.html5Email, error: "Invalid Email" }),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["Admin", "User"]),
});

const EditUser = () => {
  return (
    <div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Edit User</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </div>
  );
};
export default EditUser;

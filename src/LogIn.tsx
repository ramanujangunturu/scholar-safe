"use client";
import React from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { cn } from "./lib/utils";
import { useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
// import * as ToastPrimitives from "@radix-ui/react-toast"
// import { cva, type VariantProps } from "class-variance-authority"
// import { X } from "lucide-react"

import { BackgroundBeamsDemo } from "./components/elements/BeamsBackground";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { toast, Toaster } from "sonner";
// import PopUp from "./components/elements/PopUp";

export function LoginPage() {
  const navigate = useNavigate();
  const [email,setEmail] = React.useState("");
  const [passsword,setPassword] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if( email == " "){
      toast.error("Email is required");
      return;
    }
    if(passsword == " "){
    toast.error("Password is required");
    return;
    }
    axios.post("http://127.0.0.1:8000/auth/login",{email:email,password:passsword}).then(()=>{toast.success("Login successfully");
      setTimeout(() => {
        navigate("/homepage");
      }, 2000);}).catch((err)=>{toast.error(err.message)})
    
  };

  const AfterSignup = (email: string) => {
    axios.post("http://127.0.0.1:8000/auth/loginEmail", { email: email, password: "Test@123"})
      .then(() => {
        // toast.success("Sign-in success");
        toast.info("logged In successfully");
      setTimeout(() => {
        navigate("/homepage");
      }, 2000);
      })
      .catch((err) => {
      toast.error(err.message);
      console.log(err.detail);
      });
  }

  return (
    <>
      <BackgroundBeamsDemo>
        <Toaster richColors/>
        {/* <div className=" h-[100vh] w-[100vw]flex flex-col justify-end"> */}
        <div className="  relative max-w-md w-[100%] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-10">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to SCHOLAR-SAFE
          </h2>
          {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Login to aceternity if you can because we don&apos;t have a login
                        flow yet
                    </p> */}

          <form
            className="my-8"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted");
              // navigate("/dashboard");
            }}
          >
            {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </LabelInputContainer>
                        </div> */}
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@iiitl.ac.in"
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
            </LabelInputContainer>
            {/* <LabelInputContainer className="mb-8">
                            <Label htmlFor="twitterpassword">Your twitter password</Label>
                            <Input
                                id="twitterpassword"
                                placeholder="••••••••"
                                type="twitterpassword"
                            />
                        </LabelInputContainer> */}

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              onClick={handleSubmit}
            >
              Log In &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
                    <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] z-10">
                    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm z-10">
                      Google
                    </span>
                    <span className="absolute inset-0 z-0 opacity-0 w-full h-full">
    <GoogleLogin
                            onSuccess={(response) => {
                              const credential = response.credential;
                              if (credential) {
                                const decoded = JSON.parse(atob(credential.split(".")[1]));
                                const email = decoded.email;
                                console.log("Email used:", email);
                                AfterSignup(email);
                              } else {
                                console.log("Credential is undefined");
                              }
                            }}
                            onError={() => {
                              console.log("Login Failed");
                            }}
                          />
                    </span>
                    <BottomGradient />
                    </button>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                onClick={() => navigate("/SignUp")}
              >
                <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  SignUp
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>

        {/* </div> */}
      </BackgroundBeamsDemo>
      
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

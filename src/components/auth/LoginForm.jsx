'use client'
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IconArrowRight, IconEye, IconEyeOff, IconLock, IconMail } from '@tabler/icons-react';
import { Label } from "../ui/label";
import { useState } from "react";
import { loginRequest } from "@/app/actions/authActions";
import { useSetState } from "@mantine/hooks";
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

async function handleLogin(values, url) {
  try {
    const status = await signIn('credentials', {
      redirect: false,
      login: values.login,
      password: values.password,
      callbackUrl: '/dashboard'
    })
    return status
  } catch (error) {
    return error.message;
  }
}

export function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [params, setParams] = useSetState({ login: '', password: '' })
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);


  const { register, control, reset, handleSubmit, formState } = useForm({
    defaultValues: {
      login: '',
      password: '',

    }
  })

  const { mutateAsync: loginMutation, isPending, isError } = useMutation({
    mutationFn: (data) => handleLogin(data, null),
    onSuccess: (data) => {
      console.log(data);
      /*if(data.error){
         setError(data.error)
      }else{
          console.log(data);
          router.push(data.url)
          setTab(null)
      }*/
      //setTab(null)
      //router.refresh();*/
    }
  })



  return (
    <>
      <form action="#" onSubmit={handleSubmit(loginMutation)} className="space-y-6">
        <div>
          <Label htmlFor="number" className="font-sans">Phone Number or Email Address</Label>
          <div className="relative mt-2.5">
            <Input
              id="login"
              className="peer ps-9"
              type="text"
              {...register('login')}
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <IconMail size={16} aria-hidden="true" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="font-sans">Password</Label>
            <a href="#" className="text-sm font-sans text-primary hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="relative mt-2.5">
            <Input
              id="password"
              className="ps-9 pe-9"
              placeholder="Enter your password"
              {...register('password')}
              type={isVisible ? "text" : "password"}
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <IconLock size={16} aria-hidden="true" />
            </div>
            <button
              className="text-muted-foreground/80 cursor-pointer hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Hide password" : "Show password"}
              aria-pressed={isVisible}
              aria-controls="password"
            >
              {isVisible ? (
                <IconEyeOff size={16} aria-hidden="true" />
              ) : (
                <IconEye size={16} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <Button type="submit" className="w-full font-sans">
          Sign in
          <IconArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </>
  )
}
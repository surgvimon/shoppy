'use client'
import React, { useState } from 'react'
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormInput } from '@/components/ui';
import Link from 'next/link';


const FormSignin = () => {
  const [isDisableForm, setDisableForm] = useState(false);
  const ValidationSchema = zod.object({
    email: zod.string({
      required_error: 'This is required',
    }),
    password: zod.string({
      required_error: 'This is required',
    }),
  })

  type FormData = zod.infer<typeof ValidationSchema>;
  const newForm = useForm<FormData>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: {},
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch
  } = newForm;

  const onFinish = (data: FormData) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <FormInput
        id='login99'
        required
        disabled={isDisableForm}
        placeholder={"Please enter email"}
        title={"Email"}
        control={control}
        error={errors}
        type='text'
        name="email"
        preFix={<div className=' bg-green-900 h-12 w-12 mr-2 flex items-center justify-center'>icn</div>}
       className='px-0'
      />
      <FormInput
        id='login98'
        required
        disabled={isDisableForm}
        placeholder={"Please enter password"}
        suffix={<div className=' bg-green-900 h-12 w-12 flex items-center justify-center'>icn</div>}
        title={"Password"}
        control={control}
        error={errors}
        name="password"
        type='text'
        className='pr-0'
      />
      <Button 
        type='submit' 
        variant="primary" 
        shape={'round'} 
        size="sm"
      >
        Primary
      </Button>
      <Link href={'/auth/signup'}>Sign up</Link>
    </form>
  )
}

export default FormSignin;

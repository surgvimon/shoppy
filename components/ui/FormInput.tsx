import React from 'react'
import { Control, Controller } from "react-hook-form";
import { Input } from '@/components/ui';
import { InputCompProps } from '@/components/ui/Input';

interface InputProps extends InputCompProps {
  control: Control<any>;
  name: string;
  title: string;
  error?: any;
  iserror?: any;
  required?: boolean;
  id?: string;
  onChange?: (value: any) => void;
}

const FormInput:React.FC<InputProps> = ({
  id,
  control,
  name,
  title,
  error,
  iserror,
  required = false,
  onChange,
  ...rest
}
) => {
  return (
    <div className="w-full">
      {title && (
        <label
          htmlFor={name}
          className="text-primary text-lg font-normal leading-relaxed"
        >
          {title} {required && <span style={{ color: "red" }}>*</span>}{" "}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={id}
            {...rest}
            {...field}
            onChange={(e) => {
              e ? field.onChange(e) : field.onChange(undefined);
              if (onChange) onChange(e.target.value);
            }}
            value={field.value || ''}
            // status={error[name] ? "error" : undefined}
          />
        )}
      />
      {iserror ? (
        <>
          <span
            className={`transition duration-200 ease-in-out text-red leading-5 ${
              iserror ? "opacity-1" : "opacity-0"
            }`}
          >
            &nbsp;{iserror}&nbsp;
          </span>
        </>
      ) : (
        <>
          <span
            className={`transition duration-200 ease-in-out text-red leading-5 ${
              error[name] ? "opacity-1" : "opacity-0"
            }`}
          >
            &nbsp;{error[name]?.message}&nbsp;
          </span>
        </>
      )}
    </div>
  )
}

export default FormInput;
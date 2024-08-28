import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '@/utils/clsx';

export const InputVariants = cva(
    "w-full h-full outline-none",
    { 
        variants: {
           variant: {
              "primary": "bg-[#0BA5EC] text-white hover:bg-[#026AA2] active:bg-[#0086C9] disabled:bg-[#B9E6FE]",
              "ghost": " ",
          },
        },
        defaultVariants: {
            "variant": "ghost",
        },
    }
)

export const ContainerInputVariants = cva (
    "transition duration-200 ease-in-out w-full h-12  px-2 ring-slate-100 border border-gray-200 hover:border-gray-300 disabled:border-transparent disabled:bg-gray-100 hover:disabled:border-transparent  flex items-center justify-between [&:has(:focus-visible)]:ring-2 overflow-hidden",
    { 
        variants: {
          shape: {
            "default": "rounded-md",
            "full": "rounded-full",
          },
        },
        defaultVariants: {
            "shape": "default",
        },
    }
)
export interface InputCompProps 
    extends React.ComponentPropsWithoutRef<"input">,
    VariantProps<typeof InputVariants>,
    VariantProps<typeof ContainerInputVariants> {
    // children?: React.ReactNode;
    asChild?: boolean;
    className?: string;
    preFix?: React.ReactNode;
    suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputCompProps>(
    ({ className, variant, shape, preFix, suffix, asChild = false, ...props }, ref) => {
      // const Comp = asChild ? Slot : "button"
      const Comp = "input";
      return (
        <div className={cn(ContainerInputVariants({ shape, className }))}>
            {preFix && <div className=''>{preFix}</div>}
            <div className="flex-1 w-full h-full">
                <Comp
                ref={ref}
                className={cn(InputVariants({ variant }))}
                {...props}
                />
            </div>
            {suffix && <div className=''>{suffix}</div>}
        </div>  
      )
    }
)
Input.displayName = "Input"


export default Input;

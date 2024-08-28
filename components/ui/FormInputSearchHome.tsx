import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '@/utils/clsx';

export const InputVariants = cva(
    "outline-none w-full h-12 px-5",
    { 
        variants: {
           variant: {
              "primary": "bg-[#0BA5EC] text-white hover:bg-[#026AA2] active:bg-[#0086C9] disabled:bg-[#B9E6FE]",
              "ghost": "hover:bg-accent hover:text-accent-foreground",
          },
          shape: {
            "default": "rounded-full",
            "round": "rounded-3xl",
            "circle": "px-1 rounded-3xl",
          },
        },
        defaultVariants: {
            "variant": "ghost",
            "shape": "default",
        },
    }
)

interface Props extends React.ComponentPropsWithoutRef<"input">,VariantProps<typeof InputVariants> {
    children?: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

const FormInputSearchHome = React.forwardRef<HTMLInputElement, Props>(
    ({ className, variant, shape, asChild = false, ...props }, ref) => {
      // const Comp = asChild ? Slot : "button"
      const Comp = "input";
      return (
        <Comp
          className={cn(InputVariants({ variant, shape, className }))}
          ref={ref}
          {...props}
        />
      )
    }
  )
  FormInputSearchHome.displayName = "FormInputSearchHome"

export default FormInputSearchHome;

import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva(
    "inline-flex items-center justify-center font-medium md:h-12 h-10 px-2 md:px-6 text-nowrap rounded-full",
    {
        variants: {
            variant: {
                primary: "bg-lime-400 text-neutral-950 border border-lime-400",
                secondary: "border border-white px-4",
            },
            size: {
                sm: "h-10",
            },
        },
    }
);

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant,
                className,
                size,
            })}
            {...otherProps}
        />
    );
}

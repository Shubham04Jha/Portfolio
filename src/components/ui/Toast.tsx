import { Toast as RadixToast } from "radix-ui";
import { cn } from "../../utils/cn";
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

interface ToastProps{
    description: string,
    title?: string,
    open: boolean,
    variant?: 'success'|'update'|'error',
    onOpenChange: (open: boolean)=>void
}

const config = {
    success: {
        styles: "bg-green-500/10 border-green-500/50 text-green-400",
        icon: <FaCheckCircle className="shrink-0" />,
        label: "Success"
    },
    error: {
        styles: "bg-red-500/10 border-red-500/50 text-red-400",
        icon: <FaExclamationTriangle className="shrink-0" />,
        label: "Error"
    },
    update: {
        styles: "bg-primary/10 border-primary/50 text-primary",
        icon: <FaInfoCircle className="shrink-0" />,
        label: "Update"
    },
};

export const Toast = ({description, title ,open , onOpenChange, variant='update'}: ToastProps) => {
	return (
        <RadixToast.Root className={cn(
        "relative group flex items-center gap-4 px-4 py-2 rounded-xl border-2 backdrop-blur-md shadow-2xl",
            "transition-all duration-300 data-[state=open]:animate-slide-in data-[state=closed]:animate-hide",
        config[variant].styles
        )} open={open} onOpenChange={onOpenChange}>
            <div className="text-xl mt-0.5">
                {config[variant].icon}
            </div>
            <div className="flex flex-col gap-1">
                <RadixToast.Title className="font-bold tracking-widest uppercase text-xs">
                    {title??config[variant].label}</RadixToast.Title>
                <RadixToast.Description className="text-sm text-text-200 leading-relaxed">
                    {description}
                </RadixToast.Description>
            </div>
            <div className="absolute w-full bottom-0 left-0 h-1 rounded-full bg-current opacity-30 animate-toast-progress origin-left" />
        </RadixToast.Root>
	);
};

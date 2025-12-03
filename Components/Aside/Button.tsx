import Link, { type LinkProps } from "next/link";
import type { LucideIcon } from "lucide-react";

interface IButton extends LinkProps {
    title: string
    style?: string
    icon?: LucideIcon
}

function Button(props: IButton) {
    const Icon = props.icon
    return (
        <Link href={props.href} className={`border flex ${props.style} items-center justify-start px-6 py-2 gap-2 w-full rounded-lg transition-all duration-300 ease-in-out hover:bg-stone-100 hover:scale-105 hover:ring-4 hover:ring-zinc-200`}>
            {Icon && <Icon />}
            {props.title}
        </Link>
    )
}

export { Button }
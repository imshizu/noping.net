import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

interface Props {
    className?: string;
    children: ReactNode;
    href: string | UrlObject;
    title?: string;
}

export default function ExternalLink({ className, children, href, title }: Props) {
    return (
        <Link
            className={className ?? "underline underline-offset-4 hover:text-blue-700"}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            title={title}
        >
            {children}
        </Link>
    );
}

'use client'

import { MoveRight } from "lucide-react";
import { Button } from "./button";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

export default function Submitbtn({ text, fullwidth = false, disabled = false, type = "submit", loading, btnfn }) {
    const btntype = type ? type : 'submit';
    const variant = disabled ? 'secondary' : loading ? 'outline' : 'default';

    return (
        <>
            <Button type={btntype} className={cn('cursor-pointer', fullwidth && 'w-full')} disabled={disabled} variant={variant} onClick={btnfn ? btnfn : undefined} >
                {loading ?
                    <span className="flex items-center gap-2">
                        <span className="text-muted-foreground font-text tracking-tight text-sm">Loading...</span>
                        <Spinner />
                    </span> :
                    <span className="flex items-center gap-2 font-sans">
                        <span>{text}</span>
                        <span><MoveRight /></span>
                    </span>
                }
            </Button>
        </>
    )
}

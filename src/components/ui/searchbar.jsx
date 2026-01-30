'use client'

import { IconSearch } from "@tabler/icons-react"
import { SearchIcon } from "lucide-react"

export default function SearchBar(){
    return(
        <>
            <div className="relative border border-input flex items-center justify-between rounded-xs px-4 py-1">
                <IconSearch size={16} className="text-muted-foreground"/>
                <input
                    className="pe-9 outline-none focus-none"
                    id="input-23"
                    type="text"
                    oriInput
                    placeholder="Search"
                />
            </div>
        </>
    )
}
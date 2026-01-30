'use client'
import { Input } from "./input";
import { Button } from "./button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef, useState, useRef } from "react";
import { Label } from "./label";

const TagInput = forwardRef((props, ref) => {
    
    const { placeholder, tags, setTags, label, className } = props;
   
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const newTag = inputValue.trim();
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInputValue('');
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <>
        <div>
            
            <Input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={className}
            />
            <div className={`py-1 ${tags.length !== 0 && 'mt-1'}`}>
                <Label>{label}</Label>
                <div className="flex flex-wrap gap-2 rounded-md pt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="transition-all border bg-primary text-white font-text hover:bg-secondary/80 inline-flex h-8 items-center text-sm pl-2 rounded-md">
                            {tag}
                            <Button
                                type="button" 
                                variant="ghost"
                                onClick={() => removeTag(tag)}
                                className={cn("py-1 px-3 h-full hover:bg-transparent")}
                            >
                                <X size={14} />
                            </Button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
});

TagInput.displayName = 'TagInput';

export { TagInput };

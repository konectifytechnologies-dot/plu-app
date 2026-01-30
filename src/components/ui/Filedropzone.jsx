'use client'
import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/hooks/useFileUpload"
import { Button } from "./button"
import { useState } from "react"


export default function FileDropZone({onUpdate = null, file=null}) {
  const maxSizeMB = 10
  const maxSize = maxSizeMB * 1024 * 1024 // 2MB default
  const [loading, setLoading] = useState(false)

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps, 
    },
  ] = useFileUpload({
    accept: "image/svg+xml,video/mp4, video/webm, image/png,image/jpeg,image/jpg,image/gif,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    maxSize, 
  })
  const previewUrl = files[0]?.preview || file
  const fileName = files[0]?.file.name || null

  

  return ( 
    (<div className="flex flex-col gap-2">
      <div className="relative">
        {/* Drop area */}
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input bg-gray-100 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-md border border-dashed p-4 transition-colors has-[input:focus]:ring-[3px]">
          <input {...getInputProps()} className="sr-only" aria-label="Upload image file" />
          {previewUrl ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img
                  src={previewUrl}
                  alt={files[0]?.file?.name || "Uploaded image"}
                  className="w-full max-h-full rounded object-cover" />
                  
              </div> 
              {loading && 
                <div className="absolute bottom-0 right-0 left-0 w-full">
                  <span className="flex items-center gap-2 bg-white px-2 py-2 text-center mx-auto">
                    <span className="text-muted-foreground font-text tracking-tight text-sm">Uploading...</span>
                    
                  </span>
                </div>
              }
            </>
          ) : (
            <div
              className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true">
                <ImageIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 font-mono text-sm font-medium">Drop your file here</p>
              <p className="text-muted-foreground font-sans text-xs">
                SVG, PNG, JPG, PDF, DOC, or GIF (max. {maxSizeMB}MB)
              </p>
              <button  className="mt-4 py-2 px-4 bg-primary text-white rounded-sm text-sm border border-input flex items-center gap-2 font-sans" onClick={openFileDialog}>
                <UploadIcon className="-ms-1 size-4 opacity-60" aria-hidden="true" />
                Select File
              </button>
            </div>
          )}
        </div>

        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove image">
              <XIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      {errors.length > 0 && (
        <div className="text-destructive flex items-center gap-1 text-xs" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>)
  );
}

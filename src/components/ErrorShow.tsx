import React from "react";

interface ErrorProps{
  error: string
}

export function ErrorShow({error}: ErrorProps) {
  return (
    <p className='text-center text-aquamarine-600'>{error}</p>
  )
}
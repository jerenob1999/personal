'use client'

import React from 'react'
import { Button as MUIButton } from '@mui/material'

interface Props {
  children: React.ReactNode
}

function Button({ children } : Props) {
  return (
    <MUIButton>{children}</MUIButton>
  )
}

export default Button
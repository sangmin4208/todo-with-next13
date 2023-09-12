import * as z from 'zod'

export const todoContentValidation = z
  .string()
  .min(1, { message: 'Content is required' })

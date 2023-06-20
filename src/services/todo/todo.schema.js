// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const todoSchema = {
  $id: 'Todo',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    id: { type: 'number' },
    text: { type: 'string' }
  }
}
export const todoValidator = getValidator(todoSchema, dataValidator)
export const todoResolver = resolve({})

export const todoExternalResolver = resolve({})

// Schema for creating new data
export const todoDataSchema = {
  $id: 'TodoData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...todoSchema.properties
  }
}
export const todoDataValidator = getValidator(todoDataSchema, dataValidator)
export const todoDataResolver = resolve({})

// Schema for updating existing data
export const todoPatchSchema = {
  $id: 'TodoPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...todoSchema.properties
  }
}
export const todoPatchValidator = getValidator(todoPatchSchema, dataValidator)
export const todoPatchResolver = resolve({})

// Schema for allowed query properties
export const todoQuerySchema = {
  $id: 'TodoQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(todoSchema.properties)
  }
}
export const todoQueryValidator = getValidator(todoQuerySchema, queryValidator)
export const todoQueryResolver = resolve({})

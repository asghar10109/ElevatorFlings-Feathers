// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const eventcategoriesSchema = {
  $id: 'Eventcategories',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'title'],
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    description: { type: 'string' },
    time: { type: 'string' },
  }
}
export const eventcategoriesValidator = getValidator(eventcategoriesSchema, dataValidator)
export const eventcategoriesResolver = resolve({})

export const eventcategoriesExternalResolver = resolve({})

// Schema for creating new data
export const eventcategoriesDataSchema = {
  $id: 'EventcategoriesData',
  type: 'object',
  additionalProperties: false,
  required: ['title'],
  properties: {
    ...eventcategoriesSchema.properties
  }
}
export const eventcategoriesDataValidator = getValidator(eventcategoriesDataSchema, dataValidator)
export const eventcategoriesDataResolver = resolve({})

// Schema for updating existing data
export const eventcategoriesPatchSchema = {
  $id: 'EventcategoriesPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...eventcategoriesSchema.properties
  }
}
export const eventcategoriesPatchValidator = getValidator(eventcategoriesPatchSchema, dataValidator)
export const eventcategoriesPatchResolver = resolve({})

// Schema for allowed query properties
export const eventcategoriesQuerySchema = {
  $id: 'EventcategoriesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(eventcategoriesSchema.properties)
  }
}
export const eventcategoriesQueryValidator = getValidator(eventcategoriesQuerySchema, queryValidator)
export const eventcategoriesQueryResolver = resolve({})

// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const propertiesSchema = {
  $id: 'Properties',
  type: 'object',
  additionalProperties: false,
  required: [ 'name'],
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    image: { type: 'string' },
    location: { type: 'string' },
    address: { type: 'string' },
    description: { type: 'string' },
    capacity: { type: 'string' },
    time: { type: 'string' },
  }
}
export const propertiesValidator = getValidator(propertiesSchema, dataValidator)
export const propertiesResolver = resolve({})

export const propertiesExternalResolver = resolve({})

// Schema for creating new data
export const propertiesDataSchema = {
  $id: 'PropertiesData',
  type: 'object',
  additionalProperties: false,
  // required: ['text'],
  properties: {
    ...propertiesSchema.properties
  }
}
export const propertiesDataValidator = getValidator(propertiesDataSchema, dataValidator)
export const propertiesDataResolver = resolve({})

// Schema for updating existing data
export const propertiesPatchSchema = {
  $id: 'PropertiesPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...propertiesSchema.properties
  }
}
export const propertiesPatchValidator = getValidator(propertiesPatchSchema, dataValidator)
export const propertiesPatchResolver = resolve({})

// Schema for allowed query properties
export const propertiesQuerySchema = {
  $id: 'PropertiesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(propertiesSchema.properties)
  }
}
export const propertiesQueryValidator = getValidator(propertiesQuerySchema, queryValidator)
export const propertiesQueryResolver = resolve({})

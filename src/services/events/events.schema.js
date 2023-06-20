// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const eventsSchema = {
  $id: 'Events',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    sub_title: { type: 'string' },
    description: { type: 'string' },
    property_id: { type: 'integer' },
    time: { type: 'string' },
    status: {
      type: 'string',
      enum: ['public', 'private'],
      default: 'public'
    },
    event_category_id: { type: 'integer' },
  },
  
}
export const eventsValidator = getValidator(eventsSchema, dataValidator)
export const eventsResolver = resolve({})

export const eventsExternalResolver = resolve({})

// Schema for creating new data
export const eventsDataSchema = {
  $id: 'EventsData',
  type: 'object',
  additionalProperties: false,
  required: ['title'],
  properties: {
    ...eventsSchema.properties
  }
}
export const eventsDataValidator = getValidator(eventsDataSchema, dataValidator)
export const eventsDataResolver = resolve({})

// Schema for updating existing data
export const eventsPatchSchema = {
  $id: 'EventsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...eventsSchema.properties
  }
}
export const eventsPatchValidator = getValidator(eventsPatchSchema, dataValidator)
export const eventsPatchResolver = resolve({})

// Schema for allowed query properties
export const eventsQuerySchema = {
  $id: 'EventsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(eventsSchema.properties)
  }
}
export const eventsQueryValidator = getValidator(eventsQuerySchema, queryValidator)
export const eventsQueryResolver = resolve({})

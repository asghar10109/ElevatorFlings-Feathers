// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const conversationsSchema = {
  $id: 'Conversations',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    id: { type: 'number' },
    conversational_id: { type: 'integer' },
    sender_id: { type: 'integer' },
    receiver_id: { type: 'integer' },
    time: { type: 'string' },
  }
}
export const conversationsValidator = getValidator(conversationsSchema, dataValidator)
export const conversationsResolver = resolve({})

export const conversationsExternalResolver = resolve({})

// Schema for creating new data
export const conversationsDataSchema = {
  $id: 'ConversationsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...conversationsSchema.properties
  }
}
export const conversationsDataValidator = getValidator(conversationsDataSchema, dataValidator)
export const conversationsDataResolver = resolve({})

// Schema for updating existing data
export const conversationsPatchSchema = {
  $id: 'ConversationsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...conversationsSchema.properties
  }
}
export const conversationsPatchValidator = getValidator(conversationsPatchSchema, dataValidator)
export const conversationsPatchResolver = resolve({})

// Schema for allowed query properties
export const conversationsQuerySchema = {
  $id: 'ConversationsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(conversationsSchema.properties)
  }
}
export const conversationsQueryValidator = getValidator(conversationsQuerySchema, queryValidator)
export const conversationsQueryResolver = resolve({})

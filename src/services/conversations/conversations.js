// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  conversationsDataValidator,
  conversationsPatchValidator,
  conversationsQueryValidator,
  conversationsResolver,
  conversationsExternalResolver,
  conversationsDataResolver,
  conversationsPatchResolver,
  conversationsQueryResolver
} from './conversations.schema.js'
import { ConversationsService, getOptions } from './conversations.class.js'
import { conversationsPath, conversationsMethods } from './conversations.shared.js'

export * from './conversations.class.js'
export * from './conversations.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const conversations = (app) => {
  // Register our service on the Feathers application
  app.use(conversationsPath, new ConversationsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: conversationsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(conversationsPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(conversationsExternalResolver),
        schemaHooks.resolveResult(conversationsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(conversationsQueryValidator),
        schemaHooks.resolveQuery(conversationsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(conversationsDataValidator),
        schemaHooks.resolveData(conversationsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(conversationsPatchValidator),
        schemaHooks.resolveData(conversationsPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  eventcategoriesDataValidator,
  eventcategoriesPatchValidator,
  eventcategoriesQueryValidator,
  eventcategoriesResolver,
  eventcategoriesExternalResolver,
  eventcategoriesDataResolver,
  eventcategoriesPatchResolver,
  eventcategoriesQueryResolver
} from './eventcategories.schema.js'
import { EventcategoriesService, getOptions } from './eventcategories.class.js'
import { eventcategoriesPath, eventcategoriesMethods } from './eventcategories.shared.js'

export * from './eventcategories.class.js'
export * from './eventcategories.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const eventcategories = (app) => {
  // Register our service on the Feathers application
  app.use(eventcategoriesPath, new EventcategoriesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: eventcategoriesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(eventcategoriesPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(eventcategoriesExternalResolver),
        schemaHooks.resolveResult(eventcategoriesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(eventcategoriesQueryValidator),
        schemaHooks.resolveQuery(eventcategoriesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(eventcategoriesDataValidator),
        schemaHooks.resolveData(eventcategoriesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(eventcategoriesPatchValidator),
        schemaHooks.resolveData(eventcategoriesPatchResolver)
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

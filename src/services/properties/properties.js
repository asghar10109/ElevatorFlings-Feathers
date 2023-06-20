// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  propertiesDataValidator,
  propertiesPatchValidator,
  propertiesQueryValidator,
  propertiesResolver,
  propertiesExternalResolver,
  propertiesDataResolver,
  propertiesPatchResolver,
  propertiesQueryResolver
} from './properties.schema.js'
import { PropertiesService, getOptions } from './properties.class.js'
import { propertiesPath, propertiesMethods } from './properties.shared.js'

export * from './properties.class.js'
export * from './properties.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const properties = (app) => {
  // Register our service on the Feathers application
  app.use(propertiesPath, new PropertiesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: propertiesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(propertiesPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(propertiesExternalResolver),
        schemaHooks.resolveResult(propertiesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(propertiesQueryValidator),
        schemaHooks.resolveQuery(propertiesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(propertiesDataValidator),
        schemaHooks.resolveData(propertiesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(propertiesPatchValidator),
        schemaHooks.resolveData(propertiesPatchResolver)
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

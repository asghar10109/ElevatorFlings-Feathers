// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'


import { messagesClient } from './services/messages/messages.shared.js'

import { conversationsClient } from './services/conversations/conversations.shared.js'

import { notificationsClient } from './services/notifications/notifications.shared.js'

import { eventsClient } from './services/events/events.shared.js'

import { eventcategoriesClient } from './services/eventcategories/eventcategories.shared.js'

import { propertiesClient } from './services/properties/properties.shared.js'

import { userClient } from './services/users/users.shared.js'

import { todoClient } from './services/todo/todo.shared.js'

/**
 * Returns a  client for the my-app app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = (connection, authenticationOptions = {}) => {
  const client = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(todoClient)

  client.configure(userClient)

  client.configure(propertiesClient)

  client.configure(eventcategoriesClient)

  client.configure(eventsClient)

  client.configure(notificationsClient)

  client.configure(conversationsClient)

  client.configure(messagesClient)

  

  return client
}

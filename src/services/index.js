

import { messages } from './messages/messages.js'

import { conversations } from './conversations/conversations.js'

import { notifications } from './notifications/notifications.js'

import { events } from './events/events.js'

import { eventcategories } from './eventcategories/eventcategories.js'

import { properties } from './properties/properties.js'

import { user } from './users/users.js'

import { todo } from './todo/todo.js'

export const services = (app) => {
  

  app.configure(messages)

  app.configure(conversations)

  app.configure(notifications)

  app.configure(events)

  app.configure(eventcategories)

  app.configure(properties)

  app.configure(user)

  app.configure(todo)

  // All services will be registered here
}

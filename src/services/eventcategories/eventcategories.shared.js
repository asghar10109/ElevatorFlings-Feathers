export const eventcategoriesPath = 'eventcategories'

export const eventcategoriesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const eventcategoriesClient = (client) => {
  const connection = client.get('connection')

  client.use(eventcategoriesPath, connection.service(eventcategoriesPath), {
    methods: eventcategoriesMethods
  })
}

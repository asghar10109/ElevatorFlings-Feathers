export const propertiesPath = 'properties'

export const propertiesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const propertiesClient = (client) => {
  const connection = client.get('connection')

  client.use(propertiesPath, connection.service(propertiesPath), {
    methods: propertiesMethods
  })
}

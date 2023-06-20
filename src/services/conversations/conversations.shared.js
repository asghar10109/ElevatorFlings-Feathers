export const conversationsPath = 'conversations'

export const conversationsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const conversationsClient = (client) => {
  const connection = client.get('connection')

  client.use(conversationsPath, connection.service(conversationsPath), {
    methods: conversationsMethods
  })
}

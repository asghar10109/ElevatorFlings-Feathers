import { authenticate } from '@feathersjs/authentication'
import { generateOTP, sendEmail } from '../../otp.js'
import { hooks as schemaHooks } from '@feathersjs/schema'
import { passwordHash } from '@feathersjs/authentication-local'
import { BadRequest } from '@feathersjs/errors'
import {
  userDataValidator,
  userPatchValidator,
  userQueryValidator,
  userResolver,
  userExternalResolver,
  userDataResolver,
  userPatchResolver,
  userQueryResolver,
} from './users.schema.js'
import { UserService, getOptions } from './users.class.js'
import { userPath, userMethods } from './users.shared.js'
import upload from '../../helpers/imageupload.js'
export * from './users.class.js'
export * from './users.schema.js'

export const user = (app) => {
  // Register the main user service
  app.use(userPath, new UserService(getOptions(app)), {
    methods: userMethods,
    events: [],
  })

  app.use(`${userPath}/reset_password`, new UserService(getOptions(app)), {
    methods: ['patch'],
    events: [],
  })

  // Initialize hooks for the main user service
  app.service(userPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(userExternalResolver),
        schemaHooks.resolveResult(userResolver),
      ],
      find: [authenticate('jwt')],
      get: [authenticate('jwt')],
      create: [],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')],
    },
    before: {
      all: [
        schemaHooks.validateQuery(userQueryValidator),
        schemaHooks.resolveQuery(userQueryResolver),
      ],
      find: [],
      get: [],
      create: [
        upload,
        schemaHooks.validateData(userDataValidator),
        schemaHooks.resolveData(userDataResolver),
        async (context) => {
          const otp = generateOTP()
          const { email } = context.data
          const subject = 'OTP for Signup'
          const body = `Your OTP for signup: ${otp}`
          sendEmail(email, subject, body)
          context.data.otp = otp
          return context
        },
      ],
      patch: [
        schemaHooks.validateData(userPatchValidator),
        schemaHooks.resolveData(userPatchResolver),
      ],
      remove: [],
    },
    after: {
      all: [],
    },
    error: {
      all: [],
    },
  })

  // Hooks for the reset password service
  app.service(`${userPath}/reset_password`).hooks({
    before: {
      patch: [
        async (context) => {
          const { password, email } = context.data
          if (!password || !email) {
            return('Both password and email are required.')
          }
          const userService = app.service('users')
          const user = await userService.find({ query: { email } })
          if (user.total === 0) {
            return('User not found.')
          }
          const foundUser = user.data[0]
          const hashedPassword = await passwordHash(password)
          await userService.patch(foundUser._id, { password: hashedPassword })
          return context
        },
      ],
    },
  })

  // Additional hooks and configurations
  app.service(userPath).hooks({
    before: {
      find: async (context) => {
        const { name } = context.params.query;
        if (name) {
          context.params.query.name = { $like: `%${name}%` };
        }
        return context;
      },
    },
  });
};
``
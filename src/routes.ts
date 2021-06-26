import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListAllTagsController } from './controllers/ListAllTagsController'
import { ListComplimentReceiverUserController } from './controllers/ListComplimentReceiveUserController'
import { ListComplimentSendUserController } from './controllers/ListComplimentSendUserController'
import { ensureAdmin } from './middleware/ensureAdmin'
import { ensureAuthenticate } from './middleware/ensureAuthenticate'
import { ListUsersController } from './controllers/ListAllUserController'


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listComplimentSendByUserController = new ListComplimentSendUserController()
const listComplimentReceieByUserController = new ListComplimentReceiverUserController()
const listAllTagsController = new ListAllTagsController()
const listAllUsersController = new ListUsersController()


router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post('/compliment', ensureAuthenticate, createComplimentController.handle)
router.post('/login', authenticateUserController.handle)

router.get('/users/compliments/send', ensureAuthenticate, listComplimentSendByUserController.handle)
router.get('/users/compliments/receive', ensureAuthenticate, listComplimentReceieByUserController.handle)
router.get('/tags', listAllTagsController.handle)
router.get('/users', ensureAuthenticate, listAllUsersController.handle)


export { router }
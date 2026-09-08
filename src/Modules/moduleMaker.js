import UserHandlerModule from './UserHandler/UserHandlerModule';

export default {
  UserHandler: new UserHandlerModule(),
  UserHandlerDescriptor: UserHandlerModule.descriptor,
  /* more modules and descriptors can be added here */
};
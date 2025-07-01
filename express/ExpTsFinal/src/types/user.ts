import { User } from '@prisma/client'
export type CreateUserDto =
    Pick<User, 'email' | 'fullname' | 'majorId'>
export type UpdateUserDto =
    Pick<User, 'email' | 'fullname' | 'majorId'>
import { User } from '@prisma/client'
export type CreateUserDto =
    Pick<User, 'email' | 'fullname' | 'majorId' | 'password'>
export type UpdateUserDto =
    Pick<User, 'email' | 'fullname' | 'majorId' | 'password'>
export type LoginDto =
    Pick<User, 'email' | 'password'>
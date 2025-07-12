import { PrismaClient, User } from '@prisma/client'
import { CreateUserDto, UpdateUserDto, LoginDto } from '../types/user';

import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()


export const checkAuth = async (credentials: LoginDto):
    Promise<User | undefined> => {
    const user = await prisma.user.findFirst({
        where: {
            email: credentials.email
        }
    })
    if (!user) return undefined
    let passwordok = await bcrypt.compare(
        credentials.password, user.password
    )

    return passwordok ? user : undefined;
}

const getAllUsers = async (): Promise<User[]> => {
    return prisma.user.findMany({
        include: {
            major: true
        }
    });
}

const createUser = async (
    newUser: CreateUserDto
): Promise<User> => {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(newUser.password, salt)
    return await prisma.user.create({
        data: { ...newUser, password }
    })

}

const getUser = async (id: string): Promise<User> => {
    return prisma.user.findFirstOrThrow({ where: { id: id } })
}

const updateUser = async (id: string, user: UpdateUserDto): Promise<[affectedCount: number]> => {

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(user.password, salt)

    const result = (await prisma.user.updateMany({
        where: {
            id: id
        },
        data: {
            email: user.email,
            fullname: user.fullname,
            majorId: user.majorId,
            password: password
        }
    }));

    return [result.count];

}

const removeUser = async (id: string): Promise<number> => {
    return (await prisma.user.deleteMany({ where: { id: id } })).count
}

export {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    removeUser
}
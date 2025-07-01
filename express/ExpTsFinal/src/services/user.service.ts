import { PrismaClient, User } from '@prisma/client'
import { CreateUserDto, UpdateUserDto } from '../types/user';

const prisma = new PrismaClient()

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
    return await prisma.user.create({ data: newUser })
}

const getUser = async (id: string): Promise<User> => {
    return prisma.user.findFirstOrThrow({ where: { id: id } })
}

const updateUser = async (id: string, user: UpdateUserDto): Promise<[affectedCount: number]> => {

    const result = (await prisma.user.updateMany({
        where: {
            id: id
        },
        data: {
            email: user.email,
            fullname: user.fullname,
            majorId: user.majorId
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
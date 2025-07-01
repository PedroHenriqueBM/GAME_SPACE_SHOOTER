import { PrismaClient, Major } from '@prisma/client'
import { CreateMajorDto, UpdateMajorDto } from '../types/major'

const prisma = new PrismaClient()

const getAllMajors = async (): Promise<Major[]> => {
    return prisma.major.findMany();
}

const createMajor = async (
    newMajor: CreateMajorDto
): Promise<Major> => {
    return await prisma.major.create({ data: newMajor })
}

const majorAlreadyExists = async (name: string): Promise<boolean> => {
    return Boolean(prisma.major.findFirst({ where: { name: name } }))
}

const getMajor = async (id: string): Promise<Major> => {
    return prisma.major.findFirstOrThrow({ where: { id: id } })
}

const updateMajor = async (id: string, major: UpdateMajorDto): Promise<[affectedCount: number]> => {

    const result = (await prisma.major.updateMany({
        where: {
            id: id
        },
        data: {
            code: major.code,
            description: major.description,
            name: major.name
        }
    }));

    return [result.count];

}

const removeMajor = async (id: string): Promise<number> => {
    return (await prisma.major.deleteMany({ where: { id: id } })).count
}

export {
    getAllMajors,
    createMajor,
    majorAlreadyExists,
    getMajor,
    updateMajor,
    removeMajor
}
export interface Prof {
    nome: string;
    sala: string;
}

export interface Technologie {
    name: string;
    type: string;
    poweredByNodejs: boolean;

}

export interface Major {
    id: number
    name: string
    code: string
    description: string
    createdAt: Date
    updatedAt: Date
}
export interface User {
    id: number
    fullname: string
    email: string
    majorId: string;
    createdAt: Date
    updatedAt: Date
    major: Major;
}
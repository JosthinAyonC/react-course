export interface User {
    id: number
    username: string
    email: string
    dni: string
    password?: string
    firstname: string
    lastname: string
    status: boolean
    roles?: string[]
}
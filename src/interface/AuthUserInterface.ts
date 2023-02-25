interface AuthAttributes {
    id: number,
    email?: string | null,
    name?: string | null,
    no_tlp?: string | null,
    role: string | null,
    no_unit:number|null,
    accessToken?: string | null,
    refreshToken?: string | null,
}

export default AuthAttributes;
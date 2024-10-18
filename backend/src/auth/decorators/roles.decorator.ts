import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (role: 'admin' | 'user') => SetMetadata(ROLES_KEY, role)

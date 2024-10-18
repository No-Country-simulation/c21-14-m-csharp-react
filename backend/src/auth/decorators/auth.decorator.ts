import { applyDecorators, UseGuards } from '@nestjs/common'

import { AuthGuard } from '../guard/auth.guard'
import { RolesGuard } from '../guard/roles.guard'
import { Roles } from './roles.decorator'

export function Auth(role: 'admin' | 'user') {
  return applyDecorators(
    Roles(role), // Pasa los roles al decorador de Roles
    UseGuards(AuthGuard, RolesGuard), // Aplica los guards de autenticación y roles
  )
}

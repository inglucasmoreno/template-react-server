import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  providers: [UsuariosService, PrismaService ],
  controllers: [UsuariosController],
  exports: [UsuariosService]
})
export class UsuariosModule {}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return []
    }

    @Get('interns') // * Good
    findAllInterns() {
        return []
    }

    @Get(':id') // 读取任何string作为id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return { id }
    }
}

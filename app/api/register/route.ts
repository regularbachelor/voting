import { NextResponse, NextRequest } from 'next/server';
import validateEmail from '../../heplers/validateEmail';
import validatePassword from '../../heplers/validatePassword';
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password, birthday } = body;

        if (!validateEmail(email)) {
            return new NextResponse(
                JSON.stringify({ error: "Invalid email format" }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!validatePassword(password)) {
            return new NextResponse(
                JSON.stringify({ error: "Invalid password format" }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!birthday || isNaN(Date.parse(birthday))) {
            return new NextResponse(
                JSON.stringify({ error: "Invalid birthday format" }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email },
        });

        if (existingUserByEmail) {
            return new NextResponse(
                JSON.stringify({ error: "Email is already in use" }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const hash = bcrypt.hashSync(password, 8);

        await prisma.user.create({
            data: {
                email,
                password: hash,
                birthday: new Date(birthday),
            },
        });

        return new NextResponse(
            JSON.stringify({ message: "Registration successful" }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error handling registration request:', error);
        return new NextResponse(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
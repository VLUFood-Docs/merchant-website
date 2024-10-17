import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const restaurants = await prisma.restaurants.findMany();
      res.status(200).json(restaurants);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
  } else if (req.method === 'POST') {
    const { username, password } = req.body;

    const user = await prisma.restaurants.findUnique({ where: { username } });

    if (user) {
      return res
        .status(400)
        .json({ error: 'Username này đã được tạo tài khoản!' });
    }

    try {
      const newUser = await prisma.restaurants.create({
        data: {
          username: username,
          password: password,
          created_at: new Date(),
        },
      });
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

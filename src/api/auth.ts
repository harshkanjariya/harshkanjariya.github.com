import {post} from './client';

export async function login(data: {
  email: string,
}) {
  const response = await post('/auth/login', data);
  return response;
}
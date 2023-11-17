import {post} from './client';

export function addContact(data: {
  name: string,
  contact: string,
  message: string,
}) {
  return post('/public/contact', data);
}
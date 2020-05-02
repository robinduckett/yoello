import fetch from 'isomorphic-unfetch';

const API_URL = process.env.API_URL || 'https://api.punkapi.com/v2';

export default async function <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(`${API_URL}${input}`, init)
  return res.json();
}
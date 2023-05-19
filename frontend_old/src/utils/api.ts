const API_URL = 'https://example.com/api';

export async function search(query: string) {
  const response = await fetch(`${API_URL}/search?q=${query}`);
  const data = await response.json();
  return data.results;
}

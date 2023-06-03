import { get } from 'svelte/store';
import { nextId } from '../stores';

export function getUniqueId() {
  const id = get(nextId);
  nextId.set(id + 1);
  return `uuid-${id}`;
}
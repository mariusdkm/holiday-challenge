import { get, writable } from 'svelte/store';
import { afterNavigate } from '$app/navigation';

export const nextId = writable(0);
// export const previousPage = writable("/") ;
//
// afterNavigate(({from}) => {
//    previousPage.set(from?.url.pathname || get(previousPage))
// })
import type { LayoutLoad } from './$types';
import { parseSearchParams } from '../utils/parseSearchParams';

export const load = (({ url }) => {
  return {
    searchParams: parseSearchParams(url)
  };
}) satisfies LayoutLoad;
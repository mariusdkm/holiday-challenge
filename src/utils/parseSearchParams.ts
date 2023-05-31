export type SearchParams = {
  days: number,
  departureAirports: string[],
  arrivalAirports: string[],
  adults: number,
  children: number,
  startDate: Date,
  endDate: Date,
  limit: number
}

const urlSearchParams = ['days', 'departures', 'arrivals', 'adults', 'children', 'start', 'end', 'limit'];

export function parseSearchParams(url: URL): SearchParams | null {
  if (urlSearchParams.some(key => !url.searchParams.has(key))) {
    return null;
  }

  return {
    days: parseInt(url.searchParams.get('days')),
    departureAirports: JSON.parse(url.searchParams.get('departures')),
    arrivalAirports: JSON.parse(url.searchParams.get('arrivals')),
    adults: parseInt(url.searchParams.get('adults')),
    children: parseInt(url.searchParams.get('children')),
    startDate: new Date(url.searchParams.get('start').split('.').reverse()),
    endDate: new Date(url.searchParams.get('end').split('.').reverse()),
    limit: parseInt(url.searchParams.get('limit'))
  } as SearchParams;
}

export function modifyLimit(url: URL, newLimit: number): string {
  const limitIndex = url.search.indexOf('limit=');
  const limitNumberLength = url.searchParams.get('limit').length;
  return url.search.slice(0, limitIndex)
    + 'limit=' + newLimit
    + url.search.slice(limitIndex + 'limit='.length + limitNumberLength);
}
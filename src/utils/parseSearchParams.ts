export type SearchParams = {
  days: number,
  departureAirports: string[],
  arrivalAirports: string[],
  adults: number,
  children: number,
  startDate: Date,
  endDate: Date
}

export function parseSearchParams(url: URL): SearchParams {
  return {
    days: parseInt(url.searchParams.get('days') ?? '5'),
    departureAirports: JSON.parse(url.searchParams.get('departures') ?? '[]'),
    arrivalAirports: JSON.parse(url.searchParams.get('arrivals') ?? '[]'),
    adults: parseInt(url.searchParams.get('adults') ?? '2'),
    children: parseInt(url.searchParams.get('children') ?? '0'),
    startDate: new Date(url.searchParams.get('start') ?? new Date()),
    endDate: new Date(url.searchParams.get('end') ?? new Date())
  } as SearchParams;
}
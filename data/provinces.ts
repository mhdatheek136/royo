export type Province = 'western' | 'central' | 'southern' | 'northern' | 'eastern' | 'north-western' | 'north-central' | 'uva' | 'sabaragamuwa'

export interface ProvinceInfo {
  id: Province
  name: string
  displayName: string
  coordinates: {
    x: number
    y: number
  }
  projectCount?: number
}

export const provinces: ProvinceInfo[] = [
  {
    id: 'western',
    name: 'Western Province',
    displayName: 'Western',
    coordinates: { x: 144, y: 665 }
  },
  {
    id: 'central',
    name: 'Central Province',
    displayName: 'Central',
    coordinates: { x: 286, y: 564 }
  },
  {
    id: 'southern',
    name: 'Southern Province',
    displayName: 'Southern',
    coordinates: { x: 238, y: 824 }
  },
  {
    id: 'northern',
    name: 'Northern Province',
    displayName: 'Northern',
    coordinates: { x: 219, y: 173 }
  },
  {
    id: 'eastern',
    name: 'Eastern Province',
    displayName: 'Eastern',
    coordinates: { x: 449, y: 519 }
  },
  {
    id: 'north-western',
    name: 'North Western Province',
    displayName: 'North Western',
    coordinates: { x: 209, y: 451 }
  },
  {
    id: 'north-central',
    name: 'North Central Province',
    displayName: 'North Central',
    coordinates: { x: 202, y: 338 }
  },
  {
    id: 'uva',
    name: 'Uva Province',
    displayName: 'Uva',
    coordinates: { x: 418, y: 682 }
  },
  {
    id: 'sabaragamuwa',
    name: 'Sabaragamuwa Province',
    displayName: 'Sabaragamuwa',
    coordinates: { x: 237, y: 723 }
  },
]

export const getProvinceById = (id: Province) => {
  return provinces.find(p => p.id === id)
}

export const getProvinceByName = (name: string) => {
  return provinces.find(p => p.name.toLowerCase() === name.toLowerCase())
}

export type PaletteType = {
	[key: string]: {
		one: string
		two: string
		three: string
		four: string
	}
}

export const palettes: PaletteType = {
	'Mermaid-Lagoon': {
		one: '#145DA0',
		two: '#0C2D48',
		three: '#2E8BC0',
		four: '#B1D4E0',
	},
	'Healthy-Leaves': {
		one: '#3D550C',
		two: '#81B622',
		three: '#ECF87F',
		four: '#59981A',
	},
	'Painting-with-Pastels': {
		one: '#F2E6D6',
		two: '#A0E0E4',
		three: '#FCC0C5',
		four: '#F582A8',
	},
}

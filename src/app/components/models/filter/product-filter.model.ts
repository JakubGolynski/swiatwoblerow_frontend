export interface ProductFilter{
    name?: string,
	priceFrom?: number,
	priceTo?: number,
	ratingFrom?: number,
	category?: string | null,
	city?: string,
	conditions: Array<string>,
	page: number,
	size?: number,
	sort?: string
}
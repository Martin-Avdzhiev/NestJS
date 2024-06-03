export type Categories = "Technology" | "Environment" | "Food" | "Fashion";

const categoriesArray: Categories[] = ["Technology", "Environment", "Food", "Fashion"];

export function isValidCategory(category: string): boolean {
    return categoriesArray.includes(category as Categories);
}

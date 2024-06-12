export type Categories = "technology" | "environment" | "food" | "fashion" | "lifestyle" | "music";

const categoriesArray: Categories[] = ["technology", "environment", "food", "fashion", "lifestyle", "music"];

export function isValidCategory(category: string): boolean {
    return categoriesArray.includes(category as Categories);
}

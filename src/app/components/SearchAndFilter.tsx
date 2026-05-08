import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search } from "lucide-react";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  categories: string[];
  searchPlaceholder?: string;
  itemType?: string;
}

export function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories,
  searchPlaceholder = "Search products...",
  itemType = "products"
}: SearchAndFilterProps) {
  const sortOptions = itemType === "pages" ? [
    { value: "title", label: "Title A-Z" },
    { value: "title-desc", label: "Title Z-A" },
    { value: "category", label: "Category A-Z" },
    { value: "category-desc", label: "Category Z-A" }
  ] : [
    { value: "name", label: "Name A-Z" },
    { value: "name-desc", label: "Name Z-A" },
    { value: "price", label: "Price Low-High" },
    { value: "price-desc", label: "Price High-Low" },
    { value: "rating", label: "Rating Low-High" },
    { value: "rating-desc", label: "Rating High-Low" }
  ];

  return (
    <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex gap-2 sm:gap-3">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
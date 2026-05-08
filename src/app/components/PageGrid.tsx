import { PageCard } from "./PageCard";
import type { Page } from "../App";

interface PageGridProps {
  pages: Page[];
}

export function PageGrid({ pages }: PageGridProps) {
  if (pages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No courses found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pages.map((page) => (
        <PageCard key={page.id} page={page} />
      ))}
    </div>
  );
}

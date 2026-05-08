import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Page } from "../App";

interface PageCardProps {
  page: Page;
}

export function PageCard({ page }: PageCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="aspect-video overflow-hidden bg-muted">
        <ImageWithFallback
          src={page.thumbnail}
          alt={page.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="line-clamp-2 flex-1">{page.title}</h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <Badge variant="secondary" className="mb-3">
          {page.category}
        </Badge>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {page.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {page.tags.slice(0, 3).map((tag) => (
            <div key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
              <Tag className="w-3 h-3" />
              {tag}
            </div>
          ))}
          {page.tags.length > 3 && (
            <div className="flex items-center px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
              +{page.tags.length - 3}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

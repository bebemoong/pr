import { useState, useMemo } from "react";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { PageGrid } from "./components/PageGrid";

export interface Page {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  url: string;
  tags: string[];
}

// Mock e-learning page data
const MOCK_PAGES: Page[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    category: "Programming",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites from scratch.",
    url: "/courses/web-development-intro",
    tags: ["HTML", "CSS", "JavaScript", "Beginner"]
  },
  {
    id: "2",
    title: "Python for Data Science",
    category: "Data Science",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Master Python programming and data analysis with pandas, NumPy, and visualization libraries.",
    url: "/courses/python-data-science",
    tags: ["Python", "Data Analysis", "Pandas", "Intermediate"]
  },
  {
    id: "3",
    title: "UI/UX Design Principles",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Create beautiful, user-friendly interfaces with proven design principles and best practices.",
    url: "/courses/ui-ux-design",
    tags: ["Design", "UX", "Figma", "Beginner"]
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    category: "AI & Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    description: "Understand core ML algorithms, neural networks, and deep learning concepts with hands-on projects.",
    url: "/courses/machine-learning",
    tags: ["ML", "AI", "TensorFlow", "Advanced"]
  },
  {
    id: "5",
    title: "Digital Marketing Strategy",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Build effective marketing campaigns using SEO, social media, and content marketing strategies.",
    url: "/courses/digital-marketing",
    tags: ["Marketing", "SEO", "Social Media", "Beginner"]
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    category: "Programming",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    description: "Build cross-platform mobile apps for iOS and Android using React Native and JavaScript.",
    url: "/courses/react-native",
    tags: ["React Native", "Mobile", "JavaScript", "Intermediate"]
  },
  {
    id: "7",
    title: "Financial Analysis & Modeling",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    description: "Learn financial modeling, budgeting, and analysis techniques used by top professionals.",
    url: "/courses/financial-analysis",
    tags: ["Finance", "Excel", "Modeling", "Intermediate"]
  },
  {
    id: "8",
    title: "Cloud Computing with AWS",
    category: "Cloud & DevOps",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    description: "Master AWS services, cloud architecture, and deployment strategies for scalable applications.",
    url: "/courses/aws-cloud",
    tags: ["AWS", "Cloud", "DevOps", "Advanced"]
  },
  {
    id: "9",
    title: "Photography Masterclass",
    category: "Creative Arts",
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    description: "Capture stunning photos with professional techniques in composition, lighting, and editing.",
    url: "/courses/photography",
    tags: ["Photography", "Lightroom", "Creative", "Beginner"]
  },
  {
    id: "10",
    title: "Cybersecurity Essentials",
    category: "IT & Security",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    description: "Protect systems and networks with essential cybersecurity practices and ethical hacking skills.",
    url: "/courses/cybersecurity",
    tags: ["Security", "Networking", "Ethical Hacking", "Intermediate"]
  },
  {
    id: "11",
    title: "Project Management Professional",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
    description: "Lead successful projects using agile methodologies, scrum, and PMP certification prep.",
    url: "/courses/project-management",
    tags: ["PM", "Agile", "Scrum", "Intermediate"]
  },
  {
    id: "12",
    title: "Blockchain & Cryptocurrency",
    category: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    description: "Understand blockchain technology, smart contracts, and cryptocurrency fundamentals.",
    url: "/courses/blockchain",
    tags: ["Blockchain", "Crypto", "Web3", "Advanced"]
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("title");

  // Get unique categories from pages
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(MOCK_PAGES.map(page => page.category))];
    return uniqueCategories.sort();
  }, []);

  // Filter and sort pages
  const filteredAndSortedPages = useMemo(() => {
    let filtered = MOCK_PAGES.filter(page => {
      const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           page.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           page.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || page.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort pages
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "category":
          return a.category.localeCompare(b.category);
        case "category-desc":
          return b.category.localeCompare(a.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2">E-Learning Course Sitemap</h1>
          <p className="text-muted-foreground">
            Explore our comprehensive collection of online courses and learning resources
          </p>
        </div>

        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categories={categories}
          searchPlaceholder="Search courses..."
          itemType="pages"
        />

        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredAndSortedPages.length} of {MOCK_PAGES.length} courses
          </p>
        </div>

        <PageGrid pages={filteredAndSortedPages} />
      </div>
    </div>
  );
}
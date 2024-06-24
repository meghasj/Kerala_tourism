export interface District {
    id: string; 
    name: string;
    description: string;
    popularAttractions: Attraction[];
    cuisines: Cuisine[];
    specialties: string[];
    imageUrl: string;
}

interface Attraction {
    name: string;
    imageUrl: string;
}

interface Cuisine {
    name: string;
    imageUrl: string;
}

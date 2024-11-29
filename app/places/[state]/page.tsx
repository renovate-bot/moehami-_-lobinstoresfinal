import { Metadata } from 'next';
import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store } from "@/components/stores/store-card";
import { motion } from "framer-motion";

// Mock data service - replace with your actual data fetching logic
async function getStoresForState(state: string) {
  // TODO: Replace with actual API call or database query
  const mockStores = [
    {
      name: `${state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Bin Store`,
      location: state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3",
      tags: ["Wholesale", "Electronics"]
    }
    // Add more stores or fetch from an actual source
  ];
  return mockStores;
}

// Static params generation
export async function generateStaticParams() {
  // TODO: Replace with actual state list from your data source
  const states = [
    'california', 
    'texas', 
    'new-york',
    'florida',
    'illinois'
  ];

  return states.map((state) => ({ state }));
}

// Metadata generation
export async function generateMetadata({ 
  params 
}: { 
  params: { state: string } 
}): Promise<Metadata> {
  const stateFormatted = params.state
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Bin Stores in ${stateFormatted}`,
    description: `Find the best bin stores and liquidation centers in ${stateFormatted}`
  };
}

export default async function StatePageContent({ 
  params 
}: { 
  params: { state: string } 
}) {
  const state = params.state;
  const stateFormatted = state
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Fetch stores for the specific state
  const stores = await getStoresForState(state);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Map
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <MapPin className="h-8 w-8" />
            Bin Stores in {stateFormatted}
          </h1>
          <p className="text-muted-foreground mt-2">
            Find the best bin stores and liquidation centers in {stateFormatted}
          </p>
        </div>
      </div>
      
      {stores.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
            >
              <Store
                name={store.name}
                location={store.location}
                rating={store.rating}
                image={store.image}
                tags={store.tags}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground py-12">
          No stores found in {stateFormatted}
        </div>
      )}
    </div>
  );
}

// src/scripts/seed-categories.ts

import { db } from "@/db";
import { categories } from "@/db/schema";


// TODO: Create a script to seed the categories:
const categoryNames = [
   "My Feed",
   "Music",
   "Gaming",
   "Podcasts",
   "News",
   "Sitcoms",
   "Comedy",
   "Finance & Crypto",
   "AI creations",
   "Sports",
   "Cycling sports",
   "Viral",
   "Leaderboard",
   "Vlogs",
   "Health & Sience",
   "Entertainment",
   "Television series",
   "Satire",
   "Animated films",
   "Recently uploaded",
   "SLS",
   "Cars and vehicles",
   "DIY",
   "Politics",
   "Sience and technology",
   "Travel",
   "Cooking",
   "Education",
   "Fashion",
   "Food",
   "Art",
   "History",
];

async function main() {
   console.log("Seeding categories...");

   try {
      // Fetch existing category names
      const existing = await db.select({ name: categories.name }).from(categories);
      const existingNames = new Set(existing.map((c) => c.name));

      // Only insert categories that don't exist
      const values = categoryNames
         .filter((name) => !existingNames.has(name))
         .map((name, idx) => ({
            name,
            description: `Videos related ${name.toLowerCase()} category`,
            imageUrl: null,
            order: idx, // <-- set order here
         }));

      if (values.length > 0) {
         await db.insert(categories).values(values);
         console.log("Categories seeded successfully!");
      } else {
         console.log("No new categories to seed.");
      }
      process.exit(0);
   }

   catch (error) {
      console.error("Error seeding Categories: ", error);
      process.exit(1);
   }
}

main();
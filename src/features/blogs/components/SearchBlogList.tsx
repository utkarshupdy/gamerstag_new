"use client";

import { GrSearch } from "react-icons/gr"; // from react icons
import { Input } from "@/components/ui/input"; // from shadcn

import { motion } from "framer-motion"; // from framer motion
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchBlogListProps } from "../Blogs.types";

export default function SearchBlogList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SearchBlogListProps[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchSuggestions = debounce(async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (slug: string) => {
    router.push(`/blog-details/${slug}`);
  };

  const handleSearchClick = (
    e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent,
  ) => {
    if (("key" in e && e.key === "Enter") || e.type === "click") {
      if (searchTerm.trim()) {
        const params = new URLSearchParams(searchParams);
        params.set("search", searchTerm);
        router.push(`/blogs?${params.toString()}`);
      }
    }
  };
  return (
    <div className="space-y-4 bg-neutral-950 p-6">
      <div className="flex items-start">
        <div className="w-2 h-6 mt-1 bg-gradient-to-tr from-main via-red-700 to-red-600 "></div>
        <div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        viewport={{ amount: 1 }}
        transition={{ duration: 1 }}
      >
        <label
          htmlFor="search"
          className="text-lg font-semibold uppercase text-white ml-1"
        >
          Search
        </label>
      </motion.div>

      <Command className="rounded-none bg-black mt-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          viewport={{ amount: 0.9 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center"
        >
          <Input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleSearchClick}
            autoComplete="off"
            id="search"
            placeholder="Search here..."
            className="rounded-none py-6 text-lg text-white"
          />
          <GrSearch
            className="absolute right-4 cursor-pointer font-bold text-main"
            onClick={handleSearchClick}
          />
        </motion.div>
        {suggestions.length > 0 && (
          <CommandList>
            {suggestions.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            <CommandGroup heading="Suggestions">
              {suggestions.map((suggestion) => (
                <CommandItem
                  key={suggestion._id}
                  className="bg-neutral-900 px-0 py-0 text-white"
                >
                  <p
                    onClick={() => handleSuggestionClick(suggestion.slug)}
                    className="line-clamp-2 cursor-pointer px-2 py-2 hover:text-main"
                  >
                    {suggestion.title ||
                      suggestion.author ||
                      suggestion.category}
                  </p>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
      </div>
      </div>
    </div>
  );
}

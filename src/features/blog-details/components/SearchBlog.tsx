"use client";
import React, { useState } from "react";

import { GrSearch } from "react-icons/gr"; // icon
import { Input } from "@/components/ui/input"; // from shadcn
import { useRouter, useSearchParams } from "next/navigation";

import { debounce } from "lodash";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchBlogProps } from "@/features/blog-details/BlogDetails.type";

export default function SearchBlog() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SearchBlogProps[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchSuggestions = debounce(async (query) => {
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
        router.push(`/blog-list?${params.toString()}`);
      }
    }
  };

  return (
    <div className="space-y-4 bg-neutral-950 px-6 py-10">
      <label
        htmlFor="search"
        className="text-lg font-semibold uppercase text-white"
      >
        Search Here
      </label>
      <Command className="rounded-none bg-black">
        <div className="relative flex items-center">
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
        </div>
        {suggestions.length > 0 && (
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
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
                      suggestion.author.title ||
                      suggestion.category}
                  </p>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}

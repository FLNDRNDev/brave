'use client'

import React from "react";
import { SearchIcon } from "lucide-react";


export const SearchInput = () => {

   // TODO: Add search functionality
	return (
		<>
         <form className="w-full max-w-[37.5rem] flex">
            <div className="relative w-full">
               <input 
                  type="text"
                  placeholder="Search"
                  className="w-full pl-6 pr-2 py-2 rounded-l-full border-r-0 text-sm border-[1.5px] border-gray-400/30 !dark:border-gray-800 focus:outline-none placeholder:text-gray-dark placeholder:text-sm"
               />   

               {/* TODO: Add remove search button */}
            </div>
            <button type="submit" className="group text-primary p-4 py-2 rounded-r-full border-[1.5px] border-gray-400/30 !dark:border-gray-800 border-l-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
               <SearchIcon className="size-5 text-gray-400 group-hover:text-brand" />
            </button>
         </form>
      </>
	)
}
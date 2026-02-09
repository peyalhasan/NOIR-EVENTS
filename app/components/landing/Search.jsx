'use client'

import useDebounce from "@/app/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Search() {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term)
        } else {
            params.delete('query');
        }

        replace(`${pathName}?${params.toString()}`)
    }

    const deboundedSearch = useDebounce(handleSearch, 500)
    return (
        <div>
            <input type="text"
                onChange={(e) => deboundedSearch(e.target.value)}
                placeholder="Search..."
                className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}

export default Search
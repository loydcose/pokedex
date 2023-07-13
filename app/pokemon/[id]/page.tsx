"use client"

import Details from "@/app/(components)/Details"
import useFetch from "@/app/(customHooks)/useFetch"
import Link from "next/link"

export const metadata = {
  title: "tae",
}

export default function Pokemon() {
  const { pokemon, loading, isError, hasData } = useFetch()

  return (
    <section>
      {loading ? (
        <p>Loading...</p>
      ) : !isError && hasData ? (
        <Details pokemon={pokemon} />
      ) : (
        <p>Pokemon not found!</p>
      )}
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 block w-full md:w-fit text-center mt-12 mx-auto"
      >
        Go back
      </Link>
    </section>
  )
}

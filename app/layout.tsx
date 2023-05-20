import Image from "next/image"
import "./globals.css"
import { Roboto_Mono } from "next/font/google"
import Head from "next/head"

const roboto_mono = Roboto_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Pokedex",
  description: "Search and browse pokemons",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={roboto_mono.className + " bg-slate-900 text-slate-200"}>
        <main className="min-h-screen grid-place-items-center mx-auto w-[85%] max-w-[1206px] py-16">
          <h1 className="font-bold text-2xl mb-6 md:mb-12 flex items-center gap-3">
            <Image
              src="/favicon.svg"
              alt="logo"
              width={70}
              height={70}
              className="w-[35px]"
            />
            <span>Pokedex</span>
          </h1>
          {children}
        </main>
      </body>
    </html>
  )
}

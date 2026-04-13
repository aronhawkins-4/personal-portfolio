import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {

  return (
    <article className="bg-[#1f2122] relative py-20 md:py-24 lg:py-32 flex flex-col map-16 sm:gap-20 min-h-screen">
      <div className="container flex flex-col justify-center items-center">
        <Image src="/images/2025-Aron-2.webp" alt="Aron Hawkins headshot" className="w-48 h-auto object-cover mb-8" width={1080} height={1800} />
        <div className="space-y-2">
          <Button asChild className="w-64 block text-center">
            <Link href="https://www.aronhawkins.com">aronhawkins.com</Link></Button>
          <Button asChild className="w-64 block text-center">
            <Link href="https://nextstepdev.substack.com/">Substack</Link></Button>
          <Button asChild className="w-64 block text-center">
            <Link href="https://image-optimize.io">Image Optimize</Link></Button>
          <Button asChild className="w-64 block text-center">
            <Link href="https://www.aronhawkins.com/#contact">Contact</Link></Button>
        </div>
      </div>

    </article>
  )
}
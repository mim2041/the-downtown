import React from "react";

type GridItem = { id: number; image: { src: string }; alt: string };

export default function TwoUpGrid({ items }: { items: GridItem[] }) {
  return (
    <section className="mt-6 grid grid-cols-2 gap-2 lg:gap-4 px-6">
      {items.map((it) => (
        <div key={it.id} className="border border-gray-200 bg-white">
          <img
            src={it.image.src}
            alt={it.alt}
            className="h-48 w-full object-cover sm:h-56"
          />
        </div>
      ))}
    </section>
  );
}



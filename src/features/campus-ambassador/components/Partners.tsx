import React from "react";
import partners from "../data/partners.json";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="partner py-12">
      <div className="container mx-auto px-4">
        <div className="section-header mb-8 text-center">
          <p className="subtitle text-lg text-gray-600">Partners</p>
          <h2 className="text-3xl font-bold">Our Best Partners</h2>
        </div>
        <div className="partner__wrapper">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner, index) => (
              <div key={index} className="col">
                <div className="partner__item flex items-center justify-center border border-gray-200 p-4 shadow-sm hover:shadow-lg">
                  <Image
                    src={`/nft-portal-assets/images/${partner}`}
                    width={400}
                    height={400}
                    alt={`Partner ${index + 1}`}
                    className="max-h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

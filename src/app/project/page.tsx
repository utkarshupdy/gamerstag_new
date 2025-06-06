import Image from "next/image";

import work1 from "@/../public/project-details-assets/images/2.jpg";
import work2 from "@/../public/project-details-assets/images/3.jpg";

export default function ProjectDetails() {
  return (
    <>
      <div className="flex h-[70vh]">
        <div className="flex items-end pb-[120px] pl-20 pt-[220px]">
          <h1 className="text-7xl font-semibold text-white">
            Technology Process
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl">
        <div className="py-[140px]">
          <div className="mb-20 grid grid-cols-4 border-b border-solid border-white border-opacity-25 pb-12 text-white">
            <div>
              <p className="text-lg">Category :</p>
              <span className="text-xl font-semibold">Development</span>
            </div>

            <div>
              <p className="text-lg">Client :</p>
              <span className="text-xl font-semibold">Envato</span>
            </div>

            <div>
              <p className="text-lg">Start Date :</p>
              <span className="text-xl font-semibold">7 August 2021</span>
            </div>

            <div>
              <p className="text-lg">Designer :</p>
              <span className="text-xl font-semibold">Gamers Tag</span>
            </div>
          </div>

          <div className="flex justify-between px-14 text-white">
            <h1 className="text-4xl font-semibold">01 . The Challenge</h1>
            <div className="w-[57%] space-y-10">
              <h3 className="text-3xl font-medium">
                The goal is there are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don‘t look
                even slightly believable.
              </h3>
              <p className="text-lg text-white text-opacity-60">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don‘t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn‘t anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <Image
            src={work1}
            width={400}
            height={400}
            alt="work"
            className="h-[100vh] w-full overflow-hidden object-cover"
          />
          <Image
            src={work2}
            width={400}
            height={400}
            alt="work"
            className="h-[100vh] w-full overflow-hidden object-cover"
          />
        </div>

        <div className="flex justify-between px-14 py-[140px] text-white">
          <h1 className="text-4xl font-semibold">02 . The Solution</h1>
          <p className="w-[57%] text-lg text-white text-opacity-60">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text.
          </p>
        </div>

        <div>
          <Image
            src="/project-details-assets/images/6.jpg"
            alt="work"
            width={800}
            height={800}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

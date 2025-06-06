// import { brainmasterSymbol, check } from "../assets";
import Image from "next/image";
import { collabApps, collabContent, collabText } from "../../data/collab.json";
import { LeftCurve, RightCurve } from "../../design/CollabDesign";
import Button from "../small/Button";
import Section from "../small/Section";

export default function Collaboration() {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="mb-10 max-w-[22rem] md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image
                    src="/home3-assets/images/check.svg"
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h3 className="body-2 ml-5">{item.title}</h3>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
            {collabText}
          </p>

          <div className="scale:75 relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 rounded-full border border-n-6 md:scale-100">
            <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
              <div className="m-auto aspect-square w-[6rem] animate-pulse rounded-full bg-conic-gradient p-[0.2rem]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-n-8">
                  <Image
                    src={"/home3-assets/images/collaboration/notion.png"}
                    alt="Brainmaster logo"
                    width={48}
                    height={48}
                    className="animate-none"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom transition-transform hover:scale-105 rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-n-1/15 bg-n-7 -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      src={app.icon}
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
}

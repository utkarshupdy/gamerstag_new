import Image from "next/image";
import ChatBubbleWing from "../../../../public/home3-assets/svgs/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="pointer-events-none absolute -left-[10rem] top-0 h-[56.625rem] w-[56.625rem] opacity-50 mix-blend-color-dodge">
      <Image
        className="absolute left-1/2 top-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={"/svg/services/gradient.png"}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="font-code absolute right-8 top-8 max-w-[17.5rem] rounded-t-xl rounded-bl-xl bg-gray-800/40 px-8 py-6 text-base text-gray-200 lg:right-[8.75rem] lg:top-16 lg:max-w-[17.5rem]">
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className="absolute bottom-0 left-full" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="font-code absolute left-[3.125rem] top-8 w-full max-w-[14rem] rounded-t-xl rounded-br-xl bg-n-6 pb-7 pl-5 pr-2.5 pt-2.5 text-base md:max-w-[17.5rem]">
      Video generated!
      <div className="absolute -bottom-[1.125rem] left-5 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.75rem] bg-color-1">
        <Image src={"/logo.svg"} width={26} height={26} alt="Brainwave" />
      </div>
      <p className="tagline absolute bottom-1 right-2.5 text-[0.625rem] uppercase text-n-3">
        just now
      </p>
      <ChatBubbleWing
        className="absolute bottom-0 right-full -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center p-6">
      <Image
        src={"/home3-assets/svgs/play.svg"}
        width={24}
        height={24}
        alt="Play"
        className="mr-3 object-contain"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="h-0.5 w-1/2 bg-color-1"></div>
      </div>
    </div>
  );
};

const Generating = ({ className }: { className: string }) => {
  return (
    <div
      className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 ${
        className || ""
      } text-base`}
    >
      <Image
        className="mr-4 h-5 w-5"
        src={"/home3-assets/images/loading.png"}
        width={"20"}
        height={"20"}
        alt="Loading"
      />
      AI is generating
    </div>
  );
};

export default Generating;

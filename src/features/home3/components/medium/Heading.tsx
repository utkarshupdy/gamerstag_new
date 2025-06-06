import Tagline from "../small/Tagline";

type Props = {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
};

export default function Heading({ className, title, text, tag }: Props) {
  return (
    <div
      className={`${className} mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
}

type StartStepsProps = {
  number: number;
  text: string;
};

export default function StartSteps({ number, text }: StartStepsProps) {
  return (
    <div className="flexCenter">
      <div className="flexCenter h-[70px] w-[70px] rounded-[24px] bg-[#323F5D]">
        <p className="text-[20px] font-bold text-white">0{number}</p>
      </div>
      <p className="ml-[30px] flex-1 text-[18px] font-normal leading-[32px] text-[#B0B0B0]">
        {text}
      </p>
    </div>
  );
}

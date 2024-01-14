import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const InputButton = ({ className = "" }) => {
  return (
    <div
      className={` max-w-none sm:max-w-[445px] shadow-none sm:shadow-lg shadow-black-500/30 rounded-[24px] relative ${className}`}
    >
      <input
        className="h-[48.5px] text-blue font-publicSans text-[15px] font-bold w-full outline-none pl-[25px] rounded-[24px] pr-[25px] sm:pr-[190px] placeholder:text-blue/[.50] placeholder:text-[15px] placeholder:font-publicSans placeholder:font-bold"
        placeholder="Enter email address"
      />
      <div className="static sm:absolute mt-[16px] sm:mt-0 right-[0px] top-[0px]">
        <PrimaryButton isFullWidth>Schedule a Demo</PrimaryButton>
      </div>
    </div>
  );
};

export default InputButton;

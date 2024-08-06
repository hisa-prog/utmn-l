interface Props {
  children: any;
  onClick?: () => void;
  active: boolean;
  className?: string;
}

const SwitchSquareTab = ({
  children,
  onClick,
  active = false,
  className = "",
}: Props) => {
  return (
    <div className={`flex items-center cursor-pointer ${className}`} onClick={onClick}>
      <div
        className={`${
          active ? "bg-main-blue" : "border border-main-black-text"
        } w-4.5 h-4.5 rounded mr-2 flex items-center justify-center`}
      >
        {active && (
          <img
            src="/images/checkMarker.svg"
            alt="search"
            className=""
          />
        )}
      </div>
      <p className={`font-roboto text-base text-main-black-text`}>{children}</p>
    </div>
  );
};
export default SwitchSquareTab;

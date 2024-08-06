interface Props {
  children: any;
  className?: string;
  onClick?: () => void;
  active: boolean;
}

const NavTab = ({
  children,
  className = "",
  onClick,
  active = false,
}: Props) => {
  return (
    <div
      className={`${
        active ? "h-24.5 bg-border-light-gray" : "h-21.5 border-2 border-border-light-gray"
      } p-3  rounded-t flex items-center justify-center self-end cursor-pointer ${className}`}
      onClick={onClick}
    >
      <p
        className={`font-firaSans font-medium text-xl text-main-black-text text-center`}
      >
        {children}
      </p>
    </div>
  );
};
export default NavTab;

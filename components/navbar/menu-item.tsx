interface MenuItemProps {
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <div
      className='px-4 
      py-3 
      text-slate-gray 
      hover:bg-neutral-100 
      transition-colors 
      text-lg 
      tracking-tight 
      cursor-pointer'
    >
      {label}
    </div>
  );
};

export default MenuItem;

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='flex-[0.7] flex items-center gap-x-2 border-[1px] border-neutral-200 p-2 rounded-lg'>
      <BiSearch className='w-6 h-6 text-slate-gray' />
      <input
        className='w-full bg-transparent outline-none focus:outline-none'
        type='text'
        placeholder='Search (ctrl + k)'
      />
    </div>
  );
};

export default Search;

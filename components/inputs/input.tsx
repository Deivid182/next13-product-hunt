import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';


interface InputProps {
  label: string;
  id: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className='relative w-full'>
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=' '
        className={clsx(
          `
          peer
          font-light
          w-full
          px-4 pb-1 
          pt-4
          bg-white
          border-[1px]
          rounded-md
          outline-none
          transition-colors
          disabled:opacity-70
          disabled:cursor-not-allowed
        `,
          errors[id] ? 'border-red-500' : 'border-neutral-200',
          errors[id] ? 'focus:border-red-500' : 'focus:border-black/90'
        )}
      />
      <label
        className={clsx(
          `
        absolute
        top-3
        z-10
        origin-[0]
        trasnform
        -translate-y-3
        duration-150
        left-4
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-4  
      `,
          errors[id] ? 'text-red-500' : 'text-neutral-500'
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

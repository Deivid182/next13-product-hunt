'use client';
import { IoMdClose } from 'react-icons/io';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import Button from '../ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  disabled?: boolean;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  disabled,
  onSubmit,
  secondaryAction,
  secondaryActionLabel,
  body,
  footer,
  actionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed 
      inset-0 
      z-50 
      flex 
      items-center 
      justify-center
      overflow-x-hidden
      overflow-y-auto
      outline-none
      focus:outline-none
      bg-black/50'
    >
      <div className='relative 
        w-full 
        md:w-1/2
        lg:w-2/5
        xl:w-1/3
        my-4
        mx-auto
        h-full
        lg:h-auto
        md:h-auto'
      >
        <div className={clsx(
            `
          translate-x-0
          duration-300
          h-full
        `,
            showModal
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          )}
        >
          <div className='translate
            h-full
            lg:h-auto
            md:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white 
            outline-none 
            focus:outline-none
            '
          >
            {/* header */}
            <div
              className='flex
              items-center 
              px-4 py-2
              rounded-t
              justify-center
              relative
              border-b-[1px]
              '
            >
              <button
                className='p-1
                border-0 
                hover:opacity-70
                transition
                absolute
                left-9
                '
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className='text-lg font-semibold'>{title}</div>
            </div>
            {/* body */}
            <div className='px-4 py-2 relative flex-auto'>
              {body}
            </div>
            <div className='px-4 py-2 flex flex-col'>
              <div className='flex items-center gap-4 w-full'>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    disabled={disabled}
                    onClick={handleSecondaryAction}
                    label={secondaryActionLabel}
                    outline
                  />
                )}
                <Button 
                  disabled={disabled}
                  onClick={handleSubmit}
                  label={actionLabel}
                  fullWidth
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

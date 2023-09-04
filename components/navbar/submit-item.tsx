import { IconType } from 'react-icons'

interface SubmitItemProps {
  icon: IconType
  title: string
  description: string
}

const SubmitItem: React.FC<SubmitItemProps> = ({
  icon: Icon, title, description
}) => {
  return (
    <div className='flex gap-x-4 w-full px-4 py-3 cursor-pointer hover:bg-neutral-100'>
      <Icon className='w-6 h-6' />
      <div>
        <h3 className='text-lg font-medium'>{title}</h3>
        <p className='text-slate-gray'>{description}</p>
      </div>
    </div>
  )
}

export default SubmitItem

import { FaRegEnvelope } from 'react-icons/fa'

interface EmailProps {
    email?: string;
    }

const Email = ({ email }: EmailProps) => {
  return (
    <div className="flex gap-2 mb-4">
        <FaRegEnvelope size={16} className="mt-1 text-lightgray" />
        <span className="flex text-custombase text-lightgray">
          bookings@coworkingbangkok.com
        </span>
      </div>
  )
}

export default Email
'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    icon?: React.ReactNode;
}

const Heading = ({ title, subtitle, center, icon }: HeadingProps) => {

  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className="text-darkgray font-poppins text-6xl font-bold ">
            {title}
        </div>
        <div className="flex items-center text-4xl font-light text-neutral-500 mt-2">
        {icon && <span className="mr-2">{icon}</span>} 
        {subtitle}
      </div>
    </div>
  );
}

export default Heading
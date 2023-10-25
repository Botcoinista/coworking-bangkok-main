'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className="
      bg-blue-300
      max-w-[2520px]
      mx-auto
      xl:px-20
      md:px-10
      sm:px-2
      px-4
   ">
      {children}
    </div>
  );
};

export default Container;

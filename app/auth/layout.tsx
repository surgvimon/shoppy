import React from 'react'

interface LayoutAuthProps {
  children: React.ReactNode;
}
const LayoutAuth:React.FC<LayoutAuthProps> = ({ children }) => {
  return (
    <>
    <section className="w-full h-full flex items-center bg-[#edf4f7] bg-pack-train bg-train-4 bg-train-size bg-no-repeat">
      {children}
    </section>
    </>
  )
}

export default LayoutAuth

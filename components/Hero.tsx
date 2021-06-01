import Image from 'next/image'
import { ReactNode } from 'react'
import setClassNames from 'classnames'

interface Props {
  children?: ReactNode
  className?: string
}

const Hero = ({ children, className }: Props) => {
  return (
    <section
      className={setClassNames(
        'relative h-[84vh] max-w-full w-screen bg-hero bg-secondary-dark bg-cover md:bg-auto-full md:bg-half',
        className && className
      )}
    >
      {children}
    </section>
  )
}

export default Hero

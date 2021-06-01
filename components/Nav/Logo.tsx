import setClassNames from 'classnames'
import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
  src?: string
  alt?: string
}


// Please source the image from public folder
// i.e: /image.png => /public/image.png
const Logo = ({ className, src, alt, children }: Props) => {
  return (
    <div className={setClassNames('relative block', className && className)}>
      {src ? <Image src={src} alt={alt} layout='fill' /> : <h1 className="text-xl font-bold">{children}</h1>}
    </div>
  )
}

export default Logo

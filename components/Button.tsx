import setClassNames from 'classnames'

interface Props {
  children: string
  className?: string
  disabled?: boolean
}

const Button = ({ children, className, disabled }: Props) => {
  return (
    <button
      className={setClassNames(
        'rounded-3xl border-[1px] py-[7px] px-[16px] font-semibold leading-5 transition ease-in-out duration-200',
        className && className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

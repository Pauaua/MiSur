interface WaveDividerProps {
  flip?: boolean
  topColor?: string
  bottomColor?: string
}

export default function WaveDivider({
  flip = false,
  topColor = '#F5F7FA',
  bottomColor = '#1E3A8A',
}: WaveDividerProps) {
  return (
    <div
      style={{ backgroundColor: topColor, lineHeight: 0 }}
      className={flip ? 'rotate-180' : ''}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}

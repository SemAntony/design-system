import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgStarHalfStrokeSvgrepoCom = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M12 3.194v14.18M8.734 8.67l-4.522.536c-.548.065-.822.097-.946.225a.5.5 0 0 0-.136.418c.025.176.228.364.633.739l3.343 3.091c.12.111.18.167.219.234q.05.09.062.192c.009.077-.007.157-.04.318l-.887 4.466c-.107.542-.161.812-.078.97a.5.5 0 0 0 .356.258c.175.03.416-.104.898-.374l3.974-2.224c.142-.08.213-.12.289-.135a.5.5 0 0 1 .203 0c.075.015.146.055.289.135l3.974 2.224c.481.27.722.405.897.374a.5.5 0 0 0 .356-.259c.084-.157.03-.427-.078-.969l-.887-4.466c-.032-.16-.048-.24-.04-.318a.5.5 0 0 1 .063-.192c.038-.067.098-.123.218-.234l3.343-3.091c.406-.375.609-.563.634-.739a.5.5 0 0 0-.136-.418c-.124-.128-.398-.16-.947-.225l-4.522-.536c-.162-.02-.243-.03-.313-.061a.5.5 0 0 1-.164-.12c-.052-.056-.086-.13-.155-.279l-1.907-4.135c-.232-.501-.347-.752-.507-.83a.5.5 0 0 0-.44 0c-.16.078-.275.329-.506.83L9.366 8.21c-.068.149-.102.223-.154.28a.5.5 0 0 1-.164.119c-.07.032-.152.041-.314.06'
      }
      stroke={'currentcolor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={1.2}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStarHalfStrokeSvgrepoCom)
const Memo = memo(ForwardRef)

export default Memo

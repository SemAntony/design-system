import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPhotoCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    viewBox={'0 0 487 487'}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M308.1 277.95c0 35.7-28.9 64.6-64.6 64.6s-64.6-28.9-64.6-64.6 28.9-64.6 64.6-64.6 64.6 28.9 64.6 64.6m132.2-161.9c25.8 0 46.7 20.9 46.7 46.7v226.2c0 27.5-22.3 49.8-49.8 49.8H49.8c-27.5 0-49.8-22.3-49.8-49.8v-226.2c0-25.8 20.9-46.7 46.7-46.7h93.4l4.4-18.6c6.7-28.8 32.4-49.2 62-49.2h74.1c29.6 0 55.3 20.4 62 49.2l4.3 18.6zm-342.9 67.4c0-12.9-10.5-23.4-23.4-23.4-13 0-23.5 10.5-23.5 23.4s10.5 23.4 23.4 23.4c13 .1 23.5-10.4 23.5-23.4m261.3 94.5c0-63.6-51.6-115.2-115.2-115.2s-115.2 51.6-115.2 115.2 51.6 115.2 115.2 115.2 115.2-51.6 115.2-115.2'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPhotoCamera)
const Memo = memo(ForwardRef)

export default Memo

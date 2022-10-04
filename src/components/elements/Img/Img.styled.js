import styled from 'styled-components'

/*
Possible features:
- position [position, top, left, right, bottom]
- offsets [m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py]
- animation
- etc
*/

const ImgStyled = styled.img`
  height: ${({ height }) => height || 'var(--icon-size)'};
  width: ${({ width }) => width || 'var(--icon-size)'};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  opacity: ${({ opacity }) => opacity};
  bottom: ${({ bottom }) => bottom};
  transform: ${({ transform }) => transform};
  object-fit: ${({ objectFit }) => objectFit};
`
export default ImgStyled

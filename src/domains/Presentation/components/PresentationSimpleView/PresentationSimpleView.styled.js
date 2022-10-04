import styled from 'styled-components'

const PresentationSimpleViewWrapper = styled.div`
  height: inherit;
  width: var(--presentation-simple-view-width);
`
const PresentationImageWrapper = styled.div`
  border-radius: var(--br-4);
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--presentation-simple-view-height);
  width: var(--presentation-simple-view-width);
  border: var(--presentation-simple-view-b);
  &:hover {
    border-color: var(--accent-default);
  }
`

export { PresentationSimpleViewWrapper, PresentationImageWrapper }

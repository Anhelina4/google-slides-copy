import styled from 'styled-components'

export const ListStyled = styled.ul`
  padding-left: var(--offer-generator-p-xxl);
`

export const ListItemStyled = styled.li`
  color: var(--offer-generator-list-marker-default);
  font-size: var(--offer-generator-list-marker-font-size-default);
  list-style: ${({ markerStyle }) => markerStyle || 'circle'};
  margin-bottom: var(--offer-generator-m-xl);
`

import styled from 'styled-components'

export const RatingStarStars = styled.div`
  display: flex;
`
export const RatingStarWrapper = styled.div`
  position: relative;
  margin-right: 1px;
  width: 10px;
  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
    position: relative;
    display: inline-block;
  }
  > svg {
    color: #d5d5d5;
    display: block;
  }
`
export const RatingStarPercent = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;

  left: 0;
  top: 0;
  z-index: 1;
  svg {
    color: #ffce3d;
    fill: #ffce3d;
    position: absolute;
    stroke: #ffd211;
    left: 0;
  }
`

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    opacity: 0;
    transition: opacity 0.4s;
    transform: translateX(-50%);
    visibility: hidden;

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

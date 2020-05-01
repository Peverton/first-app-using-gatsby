import styled, { css } from 'styled-components';

export const CardV2Wrapper = styled.div`
  background-color: ${props => props.backgroud ? props.backgroud: '#e3a617'};

  h5 {
    color: #fffea8;
  }

  p {
    color: #fff2a8;
  }

  ${props =>
    props.primary &&
    css`
      background-color: #8a4baf;

      h5 {
        color: #f1defa;
      }

      p {
        color: #f1defa;
      }
    `
  }
`;
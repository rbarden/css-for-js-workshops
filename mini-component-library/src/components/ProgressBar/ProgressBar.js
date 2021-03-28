/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "radius": '4px',
    "height": '8px',
    "padding": '0'
  },
  medium: {
    "radius": '4px',
    "height": '12px',
    "padding": '0'
  },
  large: {
    "radius": '8px',
    "height": '16px',
    "padding": '4px'
  }
}

const ProgressBar = ({value, size}) => {
  const styles = SIZES[size]
  
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--radius': styles.radius,
        '--padding': styles.padding
      }}
    >
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height
          }}
        >
        </Bar>
      </BarWrapper>
      <VisuallyHidden> {value}% </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;

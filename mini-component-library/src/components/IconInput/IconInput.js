import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderWidth: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderWidth: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  
  if (!styles) {
    throw new Error('Unknown size in IconInput: ' + size)
  }
  
  return (
    <Wrapper>
      <VisuallyHidden> {label} </VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--borderWidth': styles.borderWidth + 'px',
          '--fontSize': styles.fontSize / 16 + 'rem'
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`

const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  
  width: var(--width);
  height: var(--height);
  
  padding-left: var(--height);
  
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  
  outline-offset: 2px;
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

export default IconInput;

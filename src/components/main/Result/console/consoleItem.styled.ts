import styled from 'styled-components';

interface WrapperProps {
  isCollapsed: boolean;
}

export const Wrapper = styled.span<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.isCollapsed ? 'row' : 'column')};
  align-items: ${(props) => (props.isCollapsed ? 'center' : 'flex-start')};

  column-gap: 5px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

export const ArrayContent = styled.span`
  margin-left: 20px;

  .index {
    color: #805999;
    margin-right: 10px;
  }

  .length {
    color: #cc50ff;
    margin-right: 10px;
  }
`;

export const ObjectContent = styled.span`
  margin-left: 20px;

  .index {
    color: #805999;
    margin-right: 10px;
  }
`;

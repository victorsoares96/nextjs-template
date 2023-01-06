/**
 *
 * For
 *
 */

import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div<{ orientation: "row" | "column" }>`
  display: flex;
  flex-direction: ${props => props.orientation};
`;

export interface Props<T> {
  of: T[];
  parentProps?: any;
  noParent?: boolean;
  ParentComponent?: React.FC;
  renderItem: (item: T, index: number) => React.ReactElement;
  orientation?: "row" | "column";
}

const For = <T = unknown,>({
  of,
  parentProps,
  ParentComponent = FlexContainer,
  renderItem,
  noParent,
}: Props<T>) => {
  const list = () => of.map((item, index) => ({ ...renderItem(item, index), key: index }));
  const children = () => (
    <ParentComponent {...parentProps} data-testid="for">
      {list()}
    </ParentComponent>
  );
  if (noParent) {
    return <React.Fragment>{(of || []).length ? list() : null}</React.Fragment>;
  }
  return (of || []).length ? children() : null;
};

For.defaultProps = {
  orientation: "row",
};

export default For;

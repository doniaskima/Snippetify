import React from 'react';
import styled, { keyframes } from 'styled-components';
import { createToast } from 'vercel-toast';
import * as RadixContextMenu from '@radix-ui/react-context-menu';

const timeout = 3000;

interface ContextMenuProps {
  children: React.ReactNode;
  cssStyling: string;
  scssStyling: string;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ children, cssStyling, scssStyling }) => {
  const copyToClipboard = async (styling: string) => {
    try {
      await navigator.clipboard.writeText(styling);

      createToast('Copied styles to clipboard', {
        timeout
      });
    } catch {
      createToast('Failed to copy', {
        timeout,
        type: 'error'
      });
    }
  };

  return (
    <RadixContextMenu.Root>
      <RadixContextMenu.Trigger>{children}</RadixContextMenu.Trigger>
      <Content>
        <Item onClick={() => copyToClipboard(cssStyling)}>Copy CSS</Item>
        <Item onClick={() => copyToClipboard(scssStyling)}>Copy SCSS</Item>
      </Content>
    </RadixContextMenu.Root>
  );
};

export default ContextMenu;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const Content = styled(RadixContextMenu.Content)`
  min-width: 120px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 5px 15px -5px hsla(206,22%,7%,.15);
  transform-origin: var(--radix-context-menu-content-transform-origin);

  &[data-state="open"] {
    animation: ${fadeIn} 0.15s ease;
  }

  &[data-state="closed"] {
    animation: ${fadeOut} 0.1s ease;
  }
`;

const Item = styled(RadixContextMenu.Item)`
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  height: 28px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  color: gray;

  &:hover {
    background-color: hsl(207, 11%, 91%);
    color: darkGray;
  }

  &:focus {
    outline: none;
    background-color: hsl(207, 11%, 91%);
    color: darkGray;
  }
`;

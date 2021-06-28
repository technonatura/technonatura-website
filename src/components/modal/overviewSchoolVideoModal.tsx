import { jsx, Box, Button } from 'theme-ui';
import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import ReactModal from 'react-modal';
// import './modal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    zIndex: 100,
  },
  content: {
    border: 0,
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    overflow: 'unset',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
  },
};

function Modal({
  isOpen,
  closeModal,
  children,
  ...props
}: {
  isOpen: boolean;
  closeModal?: (e: React.MouseEvent) => void;
  children?: JSX.Element | JSX.Element[] | string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={closeModal}
      {...props}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;

export const CloseButton = ({
  onClick,
  size,
  color,
  ...props
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  size?: string | number;

  color?: string;
}) => {
  return (
    <Button
      // @ts-ignore
      sx={styles.button}
      onClick={onClick}
      {...props}
    >
      <GrClose size={size ?? '24px'} color={color ?? color} />
    </Button>
  );
};

const styles = {
  button: {
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    display: 'inline-flex',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: '-60px',
    path: {
      stroke: '#fff',
    },
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
};

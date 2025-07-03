import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '0 20px 24px',
  flexDirection: 'column',
  gap: '8px',
  borderRadius: '24px',
  backgroundColor: '#1C1C1E',
  alignItems: 'center',
  textAlign: 'center',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const cell = style({
  backgroundColor: '#1C1C1E',
  borderRadius: '16px',
  padding: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  cell,
};

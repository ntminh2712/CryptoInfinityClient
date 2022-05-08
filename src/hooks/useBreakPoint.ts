import {Grid} from 'antd';

export const useBreakPoints = () => {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const isMobile = screen.xs;
  return {
    isMobile,
  };
};

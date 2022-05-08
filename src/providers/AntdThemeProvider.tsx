import React from 'react';
import PropTypes from 'prop-types';

import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';


const AntdThemeProvider: React.FC = ({ children }) => (
  <>
    <ConfigProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConfigProvider>
  </>
);

AntdThemeProvider.propTypes = {
  children: PropTypes.any,
};

export default AntdThemeProvider;

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

export const useDarkMode = () => {
  

 

  return [themeMode, themeToggler, mountedComponent];
};

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  // console.log('width', rest.data.data);
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent]);

  return (
    
      <Paper elevation={0}>
        <Layout themeMode={themeMode} themeToggler={themeToggler}>
          <Component data={rest.data} themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
   
  );
}

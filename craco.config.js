/* craco.config.js */
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { 
                
                  '@primary-color': '#b72c2c', // primary color for all components //yellow
                  '@component-background': '#494949', // green
                  '@layout-body-background': '#fffdf6', //darkest purple
                  '@layout-header-background': '@layout-body-background', //                 
                  '@layout-header-color': '@layout-body-background', // 
                  '@menu-bg': '@layout-header-background', //nav menu background color
                  '@link-color': '@primary-color', // link color // yellow
                  '@menu-popup-bg' : '@layout-body-background',
                  '@collapse-content-bg' : '@layout-body-background',
                  // '@dropdown-menu-bg': '@layout-body-background',
                  '@card-head-extra-color': 'layout-body-background',
                  '@primary-5' : '@primary-color',
                  '@border-style-base': 'none'
                  // '@dropdown-menu-submenu-disabled-bg': '@layout-body-background'
                  // '@heading-color': '@primary-color', // heading text color //purple
                  // '@font-size-base': '20px', // major text font size
//                   
//                   // Layout
//                 
//                   // Base background color for most components
//                 
                    // '@border-color-base': '@primary-color', // major border color // lightest purple
                   
                    // '@border-width-base' : '10px', // width of the border for a component
                    // '@outline-color': '@primary-color',
                    // '@menu-item-active-border-width': '0px',
             },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };


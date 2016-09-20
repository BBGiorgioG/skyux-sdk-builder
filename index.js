/*jshint node: true*/
'use strict';

const fs = require('fs');
const path = require('path');
const logger = require('winston');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/sky-pages.config');

module.exports = {
  runCommand: (command, argv) => {
    const skyPagesConfig = config.getSkyPagesConfig();
    switch (command) {
      case 'build':
        require('./cli/build')(argv, skyPagesConfig, webpack);
        break;
      case 'serve':
        require('./cli/serve')(argv, skyPagesConfig, webpack, WebpackDevServer);
        break;
      case 'watch':
        require('./cli/watch')();
        break;
      case 'version':
        require('./cli/version')();
        break;
      default:
        logger.info('sky-pages-out-skyux2: Unknown command %s', command);
        break;
    }
  }
};

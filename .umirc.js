import os from 'os';
import pageRoutes from './config/router.config';
import webpackPlugin from './config/plugin.config';
import defaultSettings from './src/defaultSettings';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        immer: true,
        hmr: true,
      },
      targets: {
        ie: 11,
      },
      locale: {
        enable: true,                 // default false
        default: 'zh-CN',             // default zh-CN
        baseNavigator: true,          // default true, when it is true, will use `navigator.language` overwrite default
      },
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/PageLoading/index',
      },
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local',
        },
      },
      ...(!process.env.TEST && os.platform() === 'darwin'
        ? {
            dll: {
              include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
              exclude: ['@babel/runtime'],
            },
            hardSource: true,
          }
        : {}),
    },
  ],
];

export default {
  plugins: plugins,
  targets: {
    ie: 11,
  },
  define: {
    'process.env.APP_ENV': process.env.APP_ENV || '',
  },
  // 路由配置
  routes: pageRoutes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('loyo-data-server-boss.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const loyoDataServerBossPath = match[1].replace('.less', '');
        const arr = loyoDataServerBossPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `loyo-data-server-boss${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  hash: true,
}

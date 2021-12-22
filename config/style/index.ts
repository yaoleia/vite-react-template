import { CSSOptions } from 'vite';
/**
 * @description css样式配置
 */
const cssOption: CSSOptions = {
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#0047BE',
      },
    },
    scss: {
      additionalData: '@import "./src/assets/scss/varible.scss";',
    },
  },
};
export default cssOption;

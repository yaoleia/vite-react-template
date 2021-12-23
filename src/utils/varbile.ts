/**
 * @description 状态码
 */
export enum requestCode {
  failedCode = 111, // 失败
  successCode = '000', // 成功
  noLoginTokenCode = 202, // 无token
  noRouterCode = 404, // 路劲找不到
  serverErrorCode = 500, // 服务错误
}

/**
 * @description 判断json是否为空
 * @param {Object} json
 * @return {Number} 将有值得数据进行累加
 */
export const isJsonVal = <T extends object>(json: T) => {
  let jsonLength = 0;
  for (var i in json) {
    if (json[i] !== undefined && json[i] !== null) {
      jsonLength++;
    }
  }
  return jsonLength;
};

/**
 * @description node运行环境说明
 * @return string
 */
export const environment = () => {
  const env = import.meta.env.VITE_APP_ANT;
  return ['dev', 'alpha', 'preprod', 'prod'].includes(env) ? env : 'development';
};

import React, { lazy } from 'react';
import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { requestCode } from './varbile';

/**
 * @param status 状态
 * @param content 弹窗的文本提示语
 */

export type statusCode = requestCode;

export const toast = (
  status: statusCode = requestCode.successCode,
  content: string = '操作成功',
): void => {
  if (status === requestCode.successCode) {
    message.success(content);
  } else if (status === requestCode.failedCode) {
    message.error(content);
  }
};

/**
 * @description 对 Modal.confirm组件进行二次封装
 * @param func 要操作的函数
 * @param content 弹窗的文本
 * @param onCancel 取消函数
 */
export const confirm = (
  func: Function,
  content: string = '确定要删除吗？',
  onCancel?: Function,
): void => {
  Modal.confirm({
    title: '提示',
    content,
    okText: '确认',
    centered: true,
    icon: <ExclamationCircleOutlined />,
    cancelText: '取消',
    onOk: async () => {
      func && func();
    },
    onCancel() {
      onCancel && onCancel();
    },
  });
};

/**
 * @description 异步引入组件
 * @param path 路径
 */
export const lazyComponent = (path: string) => {
  return lazy(() => import(`@/pages/${path}`));
};

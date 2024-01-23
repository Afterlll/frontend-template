import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '江喜原';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'gitee',
          title: 'gitee',
          href: 'https://gitee.com/wangkeyaowky',
          blankTarget: true,
        },
        {
          key: 'github',
          title: 'github',
          href: 'https://github.com/Afterlll',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 源码
            </>
          ),
          href: 'https://github.com/Afterlll',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

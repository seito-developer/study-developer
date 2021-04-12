import React from 'react';
import Members from './Members';

export default {
  component: Members,
  title: 'Members'
};

const Template = args => <Members {...args} />

export const Default = Template.bind({})
Default.args = {
  members: [
    {
      image: 'https://dummyimage.com/100x100/000/fff',
      name: '薩摩 芋',
      belong: '株式会社tts',
      role: ['管理者', '決裁者']
    },
    {
      image: 'https://dummyimage.com/100x100/fff/333',
      name: 'ジェニー・ハイ',
      belong: '株式会社tts',
      role: ['決裁者']
    },
    {
      image: 'https://dummyimage.com/100x100/666/ddd',
      name: '爪之垢 新左衛門',
      belong: 'なし',
      role: ['なし']
    }
  ]
}
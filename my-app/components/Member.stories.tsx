import React from 'react';
import Member from './Member';

export default {
  component: Member,
  title: 'Member'
};

const Template = args => <Member {...args} />

export const Default = Template.bind({})
Default.args = {
  image: 'https://dummyimage.com/100x100/000/fff',
  name: '薩摩 芋',
  belong: '株式会社tts',
  role: ['管理者', '決裁者']
}
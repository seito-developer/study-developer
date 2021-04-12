import React, { useMemo } from 'react'
import DynamicTable from './DynamicTable'

export default {
  component: DynamicTable,
  title: 'DynamicTable',
};

const Template = args => <DynamicTable {...args} />

// interface Data {
//   name: string;
//   age: number;
// }

export const Default = Template.bind({})
Default.args = {
  Header: '2021年3月請求分',
  columns: [
    {
      Header: '',
      accessor: 'type'
    },
    {
      Header: '',
      accessor: 'cat'
    },
    {
      Header: '',
      accessor: 'company'
    },
    {
      Header: '',
      accessor: 'tag'
    },
    {
      Header: '',
      accessor: 'price'
    },
    {
      Header: '',
      accessor: 'status'
    }
  ],
  data: [
    {
      type: 'TBP初期開発',
      cat: '企画費',
      company: '株式会社四月一日企画',
      tag: '',
      price: '100,000円',
      status: '未'
    },
    {
      type: 'TBP初期開発',
      cat: '企画費',
      company: '株式会社LIG',
      tag: '#デザイン費',
      price: '100,000円',
      status: '決'
    }
  ]
};
  

// const data = React.useMemo(() => makeData(20), [])
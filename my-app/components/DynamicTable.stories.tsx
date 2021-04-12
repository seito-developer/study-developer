import React, { useMemo } from 'react'
import DynamicTable from './DynamicTable'
import makeData from '../makeData'

export default {
  component: DynamicTable,
  title: 'DynamicTable',
};

const Template = args => <DynamicTable {...args} />

// interface Data {
//   name: string;
//   age: number;
// }
const data = makeData(10000)
const columns = [
  {
    Header: '2021年3月請求分',
    columns: [
      {
        Header: 'タイプ',
        accessor: 'type'
      },
      {
        Header: '項目',
        accessor: 'cat'
      },
      {
        Header: '会社名',
        accessor: 'company'
      },
      {
        Header: 'タグ',
        accessor: 'tag'
      },
      {
        Header: '金額',
        accessor: 'price'
      },
      {
        Header: 'ステータス',
        accessor: 'status'
      }
    ]
  }
]

export const Default = Template.bind({})
Default.args = {
  columns: columns,
  data: data
};
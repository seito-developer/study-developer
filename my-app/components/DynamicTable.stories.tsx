import React, { useMemo } from 'react'
import DynamicTable from './DynamicTable'
import makeData from '../makeData'

// Referrence
// https://react-table.tanstack.com/docs/examples/row-selection

export default {
  component: DynamicTable,
  title: 'DynamicTable',
};

const Template = args => <DynamicTable {...args} />

const data = makeData(100)
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
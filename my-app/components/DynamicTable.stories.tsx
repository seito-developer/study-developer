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
    ]
  }
]

export const Default = Template.bind({})
Default.args = {
  columns: columns,
  data: data
};
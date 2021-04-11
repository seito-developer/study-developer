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
  columns: [
    {
      Header: '名前',
      accessor: 'name'
    },
    {
      Header: '年齢',
      accessor: 'age'
    },
  ],
  data: [
    {
      name: 'John',
      age: 23
    },
    {
      name: 'Jane',
      age: 26
    }
  ]
};
  
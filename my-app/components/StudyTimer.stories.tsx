import React from 'react'
import StudyTimer from './StudyTimer'

export default {
  component: StudyTimer,
  title: 'StudyTimer',
};

const Template = args => <StudyTimer {...args} />

export const Default = Template.bind({})
Default.args = {
    initialVal: 0,
    startImmediateStatus: false
}
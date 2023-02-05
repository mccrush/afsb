import ClassBasic from './ClassBasic'

export default class ClassUndergroup extends ClassBasic {
  constructor({ groupId }) {
    super()
    this.groupId = groupId
  }

  type = 'undergroup'
}
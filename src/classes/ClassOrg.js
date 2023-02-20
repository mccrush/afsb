import ClassBasic from './ClassBasic'

export default class ClassOrg extends ClassBasic {
  constructor({ groupId, undergroupId }) {
    super()
    this.groupId = groupId
    this.undergroupId = undergroupId
  }

  type = 'org'
  address = ''
  coordinates = ''
  phone = []
  hours = []
  schedule = []
  dateUpdate = ''
  authorUpdateId = ''
  photo = ''
}
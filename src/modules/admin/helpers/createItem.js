import ClassGroup from './../../../classes/ClassGroup'
import ClassUndergroup from './../../../classes/ClassUndergroup'
import ClassOrg from './../../../classes/ClassOrg'

export const createItem = ({ type = '', groupId = '', undergroupId = '' }) => {
  let newItem = {}

  switch (type) {
    case 'group':
      newItem = new ClassGroup()
      break
    case 'undergroup':
      newItem = new ClassUndergroup({ groupId })
      break
    case 'org':
      newItem = new ClassOrg({ groupId, undergroupId })
      break
  }

  return Object.assign({}, newItem)
}
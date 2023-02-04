import ClassGroup from './../../../classes/ClassGroup'
import ClassUndergroup from './../../../classes/ClassUndergroup'
import ClassOrg from './../../../classes/ClassOrg'

export const createItem = ({ type = '' }) => {
  let newItem = {}

  switch (type) {
    case 'group':
      newItem = new ClassGroup()
      break
    case 'undergroup':
      newItem = new ClassUndergroup()
      break
    case 'org':
      newItem = new ClassOrg()
      break
  }

  return Object.assign({}, newItem)
}
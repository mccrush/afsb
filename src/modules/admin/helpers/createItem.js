import ClassGroup from './../../../classes/ClassGroup'
import ClassUndergroup from './../../../classes/ClassUndergroup'
import ClassOrg from './../../../classes/ClassOrg'
import ClassSponsor from './../../../classes/ClassSponsor'

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
    case 'sponsor':
      newItem = new ClassSponsor()
      break
  }

  return Object.assign({}, newItem)
}
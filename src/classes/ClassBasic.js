// Класс Основной с общими свойствами
import getId from './../methods/getId'
import getDateNow from './../methods/getDateNow'

export default class ClassBasic {
  constructor() {
    this.id = getId()
    this.dateCreate = getDateNow()
  }

  type = ''
  title = ''
  description = ''
  position = 0
  status = 'active'
}
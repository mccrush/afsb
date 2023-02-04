// Класс Основной с общими свойствами
import getId from './../mrthods/getId'
import getDateNow from './../mrthods/getDateNow'

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
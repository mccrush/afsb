import ClassBasic from './ClassBasic.js'

export default class ClassOrg extends ClassBasic {
  constructor(undergroupId = '') {
    super()
    this.undergroupId = undergroupId
  }

  type = 'org'
}
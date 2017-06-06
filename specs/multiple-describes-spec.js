/* global describe, it */
const empty = () => {}

describe('top', () => {
  describe('a1', () => {
    it('a1-1', empty)
    it('a1-2', empty)
    it('a1-3', empty)
    it('a1-4', empty)
    it('a1-5', empty)
    it('a1-6', empty)
    it('a1-7', empty)
    it('a1-8', empty)
    it('a1-9', empty)
  })

  describe('inner', () => {
    it('inner-1', empty)
    it('inner-2', empty)
    describe('d1', () => {
      it('d1-1', empty)
      it('d1-2', empty)
      it('d1-3', empty)
      it('d1-4', empty)
      it('d1-5', empty)
      it('d1-6', empty)
      it('d1-7', empty)
      it('d1-8', empty)
      it('d1-9', empty)
    })
  })
})

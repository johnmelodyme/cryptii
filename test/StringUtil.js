
import assert from 'assert'
import { describe, it } from 'mocha'

import StringUtil from '../src/StringUtil'

/** @test {StringUtil} */
describe('StringUtil', () => {
  /** @test {StringUtil.camelCaseToRegular} */
  describe('camelCaseToRegular()', () => {
    it('should translate "helloWorld" to "Hello World"', () => {
      let string = StringUtil.camelCaseToRegular('helloWorld')
      assert.strictEqual('Hello World', string)
    })
    it('should translate "ILoveYOU" to "I Love YOU"', () => {
      let string = StringUtil.camelCaseToRegular('ILoveYOU')
      assert.strictEqual('I Love YOU', string)
    })
  })
  /** @test {StringUtil.uniqueId} */
  describe('uniqueId()', () => {
    it('should return 10 unique ids', () => {
      let uids = [StringUtil.uniqueId()]
      for (let i = 0; i < 9; i++) {
        let uid = StringUtil.uniqueId()
        assert.strictEqual(uids.indexOf(uid), -1)
        uids.push(uid)
      }
    })
  })
  /** @test {StringUtil.chunkString} */
  describe('chunkString()', () => {
    it('should return an empty array if an empty string is given', () => {
      let chunks = StringUtil.chunk('', 2)
      assert.deepStrictEqual(chunks, [])
    })
    it('should separate a string into chunks of given length', () => {
      let chunks = StringUtil.chunk('abcde', 2)
      assert.deepStrictEqual(chunks, ['ab', 'cd', 'e'])
    })
  })
})

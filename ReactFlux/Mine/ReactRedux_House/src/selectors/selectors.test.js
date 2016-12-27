import expect from 'expect'
import {authorsFormattedForDropdown} from './selectors'

describe('Author Selectors', ()=> {
  describe('authorsFormattedForDropdown',()=>{
    it('should return author data formatted for dropdown', () =>{
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName}
      ]
      const expected = [
        {value: 'cory-house', text: "Cory House"}
      ]
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    })
  })
})

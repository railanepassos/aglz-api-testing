/// <reference types="cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Ping', () => {
  it('GET Healtcheck', () => {
    req.getPing().then(getPingResponse => {
      assertions.sholdHaveStatus(getPingResponse, 201)
    })
  })
})

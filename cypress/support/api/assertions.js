class Assertions {
  sholdHaveStatus(response, status) {
    expect(response.status).to.eq(status)
  }
}
export default new Assertions()

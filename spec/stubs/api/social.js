import sinon from 'sinon'
import { social } from '../../../src/api'

export default {
  install: () => {
    let stub

    beforeEach(() => {
      stub = sinon.stub(social, 'getSocialList')
      stub.returns([
        {
          icon: 'linkedin',
          name: 'LinkedIn',
          side: 0,
          url: '',
        },
        {
          className: 'google plus',
          icon: 'mail',
          name: 'Email',
          side: 0,
          url: '',
        },
      ])
    })

    afterEach(() => {
      stub.restore()
    })
  },
}

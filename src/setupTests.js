// https://github.com/facebookincubator/create-react-app/issues/3206#issuecomment-332582236
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

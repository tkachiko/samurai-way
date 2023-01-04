import {create, ReactTestInstance} from 'react-test-renderer'
import {ProfileStatus} from './ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status={'it-incubator.io'} updateStatus={() => {
    }} />)
    const instance: any = component.getInstance()
    expect(instance.state.status).toBe('it-incubator.io')
  })
  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status={'it-incubator.io'} updateStatus={() => {
    }} />)
    // eslint-disable-next-line testing-library/await-async-query
    const span: ReactTestInstance = component.root.findByType('span')
    expect(span).not.toBeNull()
  })
  test('after creation <span> should contain correct status', () => {
    const component = create(<ProfileStatus status={'it-incubator.io'} updateStatus={() => {
    }} />).root
    // eslint-disable-next-line testing-library/await-async-query
    const span: ReactTestInstance = component.findByType('span')
    expect(span.children[0]).toBe('it-incubator.io')
  })
  test('after creation <input> shouldn\'t be displayed', () => {
    const component = create(<ProfileStatus status={'it-incubator.io'} updateStatus={() => {
    }} />)

    expect(() => {
      // eslint-disable-next-line testing-library/await-async-query
      component.root.findByType('input')
    }).toThrow()
  })
  test('<input> should be displayed in editMode instead of <span>', () => {
    const component = create(<ProfileStatus status={'it-incubator.io'} updateStatus={() => {
    }} />)

    // eslint-disable-next-line testing-library/await-async-query
    const span: ReactTestInstance = component.root.findByType('span')
    span.props.onDoubleClick()
    // eslint-disable-next-line testing-library/await-async-query
    const input: ReactTestInstance = component.root.findByType('input')
    expect(input.props.value).toBe('it-incubator.io')
  })
  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status={'it-incubator.io'} updateStatus={mockCallback} />)

    const instance = component.getInstance()
    // @ts-ignore
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})


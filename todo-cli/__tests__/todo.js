/* eslint-disable no-undef */
const todoList = require('../todo')

describe('Todo List Functionality', () => {
  let todo
  beforeEach(() => {
    todo = todoList()
  })

  test('Creating a new todo', () => {
    todo.add({ title: 'New Task', dueDate: '2023-12-31', completed: false })
    expect(todo.all.length).toBe(1)
  })

  test('Marking a todo as completed', () => {
    todo.add({ title: 'New Task', dueDate: '2023-12-31', completed: false })
    todo.markAsComplete(0)
    expect(todo.all[0].completed).toBe(true)
  })

  test('Retrieval of overdue items', () => {
    todo.add({
      title: 'Overdue Task',
      dueDate: '2022-01-01',
      completed: false
    })
    todo.add({
      title: 'Not Overdue Task',
      dueDate: '2023-12-31',
      completed: false
    })
    const overdueItems = todo.overdue()
    expect(overdueItems.length).toBe(1)
    expect(overdueItems[0].title).toBe('Overdue Task')
  })

  test('Retrieval of due today items', () => {
    const today = new Date().toISOString().split('T')[0]
    todo.add({ title: 'Due Today Task', dueDate: today, completed: false })
    const dueTodayItems = todo.dueToday()
    expect(dueTodayItems.length).toBe(1)
    expect(dueTodayItems[0].title).toBe('Due Today Task')
  })

  test('Retrieval of due later items', () => {
    todo.add({
      title: 'Due Later Task',
      dueDate: '2023-12-31',
      completed: false
    })
    const dueLaterItems = todo.dueLater()
    expect(dueLaterItems.length).toBe(1)
    expect(dueLaterItems[0].title).toBe('Due Later Task')
  })

  test('toDisplayableList function is implemented', () => {
    expect(typeof todo.toDisplayableList).toBe('function')
  })
})

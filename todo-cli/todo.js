/* eslint-disable no-undef */
const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    const today = new Date().toISOString().split('T')[0]
    return all.filter((item) => !item.completed && item.dueDate < today)
  }

  const dueToday = () => {
    const today = new Date().toISOString().split('T')[0]
    return all.filter((item) => item.dueDate === today)
  }

  const dueLater = () => {
    const today = new Date().toISOString().split('T')[0]
    return all.filter((item) => !item.completed && item.dueDate > today)
  }

  const toDisplayableList = (list) => {
    let output = ''
    list.forEach((item) => {
      const formattedDueDate =
        item.dueDate === new Date().toISOString().split('T')[0]
          ? ''
          : ` ${item.dueDate}`
      const checkbox = item.completed ? '[x]' : '[ ]'
      output += `${checkbox} ${item.title}${formattedDueDate}\n`
    })
    return output
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}

module.exports = todoList

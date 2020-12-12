import { CREATE_TASK, UPDATE_TASK, DELETE_TASK, ACTIVE_TASK, RESET_TASK} from '../constants'

export function createTask(data) {
    return {
      type: CREATE_TASK,
      payload: data
    }
  }
  
  export function updateTask(data) {
    return {
      type: UPDATE_TASK,
      payload: data
    }
  }
  
  export function deleteTask(data) {
    return {
      type: DELETE_TASK,
      payload: data
    }
  }

  export function activeTask(data) {
    return {
      type: ACTIVE_TASK,
      payload: data
    }
  }

  export function resetTask(data) {
    return {
      type: RESET_TASK,
      payload: data
    }
  }
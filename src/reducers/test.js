const actionType = 'TEST_MEMBER'

const action = {type: actionType}
const actionCreator = (data) => {return {actionType, data}
}
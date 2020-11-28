import * as Actions from "./actions";
import * as Types from "./types";

const initState = {
  data: [{ message: "sample data", created: new Date() }],
  message: "please type mesage:",
  mode: "default",
  fdata: [],
};

export const memoReducer = (state = initState, action: Types.Action): any => {
  switch (action.type) {
    case Actions.ADD_MEMO:
      return addReduce(state, action);
    case Actions.DELETE_MEMO:
      return deleteReduce(state, action);
    case Actions.FIND_MEMO:
      return findReduce(state, action);
    default:
      return state;
  }
};

// メモ追加のレデュース処理
function addReduce(state: any, action: Types.Action) {
  let data = {
    message: action.payload,
    created: new Date(),
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data: newdata,
    message: "Added!",
    mode: "add",
    fdata: [],
  };
}

// メモ削除のレデュース処理
function deleteReduce(state: any, action: Types.Action) {
  let newdata = state.data.slice();
  newdata.splice(action.payload, 1);
  return {
    data: newdata,
    message: `delete ${action.payload}:`,
    mode: "delete",
    fdata: [],
  };
}

// メモ検索のレデュース処理
function findReduce(state: any, action: Types.Action) {
  let fdata: Types.Memo[] = [];
  state.data.foreach((value: Types.Memo) => {
    if (value.message.indexOf(action.payload as string) >= 0) {
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: `find ${action.payload}:`,
    mode: "find",
    fdata: fdata,
  };
}

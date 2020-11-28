import * as Types from "./types";

export const ADD_MEMO = "ADD";
export const DELETE_MEMO = "DELETE";
export const FIND_MEMO = "FIND";

export const addMemo = (text: string): Types.Action => ({
  type: ADD_MEMO,
  payload: text,
});

export const deleteMemo = (index: number): Types.Action => ({
  type: DELETE_MEMO,
  payload: index,
});

export const findMemo = (text: string): Types.Action => ({
  type: FIND_MEMO,
  payload: text,
});

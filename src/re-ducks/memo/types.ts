export type Memo = {
  message: string;
  created: Date;
}

export type Action = {
  type: "ADD" | "DELETE" | "FIND";
  payload: number | string;
};

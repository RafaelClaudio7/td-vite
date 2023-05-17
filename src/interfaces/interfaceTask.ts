export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "to do" | "in progress" | "done";
}

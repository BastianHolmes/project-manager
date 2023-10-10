export interface Project {
  id: number;
  title: string;
  created_at: string;
}

export interface Comment {
  id: string;
  commentText: string;
  childComments: Comment[];
  isRootNode: boolean;
  parentNodeId: string | null;
}

export interface Subtask {
  id?: string;
  title?: string;
  done?: boolean;
  task_id?: string;
}

export interface Task {
  id?: string;
  title?: string;
  description?: string;
  project_id?: number;
  status?: string;
  count?: number;
  priority?: string;
  created_at?: string;
  due_date?: string;
  attachments?: string[];
}

export interface Project {
  id: string | null;
  title: string;
  created_at: string;
}

export interface CommentData {
  id?: string;
  commentText?: string;
  childComments?: CommentData[];
  isRootNode?: boolean;
  parentNodeId?: string | null;
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
  project_id?: string;
  status?: string;
  count?: number;
  priority?: string;
  created_at?: string;
  due_date?: string;
  attachments?: string[];
}

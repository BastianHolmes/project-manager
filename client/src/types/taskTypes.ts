export interface Task {
  id?: string;
  title?: string;
  description?: string;
  project_id?: number;
  status?: string;
  created_at?: string;
  due_date?: string;
  attachments?: string[];
}

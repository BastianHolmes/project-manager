
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    task_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    time_spent INTERVAL,
    due_date DATE,
    priority VARCHAR(50),
    attached_files TEXT[],
    status VARCHAR(50),
    project_id INTEGER REFERENCES projects(id),
    parent_task_id INTEGER REFERENCES tasks(id),
    is_parent_task BOOLEAN DEFAULT false
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    task_id INTEGER REFERENCES tasks(id),
    parent_comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE
);

//Создание проекта:
INSERT INTO projects (title, description, task_count)
VALUES ('New Project', 'This is a new project', 0);

//Создание таски:
INSERT INTO tasks (title, description, due_date, priority, project_id, is_parent_task)
VALUES ('Подготовить презентацию', 'Сделать слайды и подготовить доклад', '2022-10-15', 'Высокий', 1, true);


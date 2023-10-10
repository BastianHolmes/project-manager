
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
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
    count INTEGER DEFAULT 0,
    parent_task_id INTEGER REFERENCES tasks(id),
    is_parent_task BOOLEAN DEFAULT false
);


CREATE TABLE subtasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    task_id INTEGER REFERENCES tasks(id),
    done BOOLEAN DEFAULT false
);

CREATE TABLE comments (
task_id INTEGER
id SERIAL PRIMARY KEY,
comment_text TEXT NOT NULL,
parent_id INTEGER,
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW(),
FOREIGN KEY (parent_id) REFERENCES comments (id) ON DELETE CASCADE
);


//Создание проекта:
INSERT INTO projects (title, description, task_count)
VALUES ('New Project', 'This is a new project', 0);

//Создание таски:
INSERT INTO tasks (title, description, due_date, priority, project_id, is_parent_task)
VALUES ('Подготовить презентацию', 'Сделать слайды и подготовить доклад', '2022-10-15', 'Высокий', 1, true);

//Cоздание подзадачи
INSERT INTO subtasks (title, task_id) VALUES ('Подзадача 1', 1);

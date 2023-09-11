import React, { useEffect, useState } from 'react';
import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Projeto da lista`;
  });

  const [hideCheckbox, setHideCheckbox] = useState(false);

  const handleToggleCheckbox = () => {
    setHideCheckbox(!hideCheckbox);
  };

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <button class="lock-task" onClick={handleToggleCheckbox}>
        {hideCheckbox ? 'Liberar Tasks' : 'Travar Tasks'}
      </button>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            {hideCheckbox ? null : <Checkbox id={task.id} taskDesc={task.task} />}
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  );
};

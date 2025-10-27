const form = document.querySelector('#form');
const Tasks = document.querySelector('.todos');
const allBtn = document.querySelector('#all');
const pendBtn = document.querySelector('#pending');
const cmpltBtn = document.querySelector('#completed');

// Add new task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = document.querySelector('#tasks').value.trim();
  if (taskText === '') {
    alert('Please enter a task...');
    return;
  }

  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  li.textContent = taskText;
  li.classList.add('pending'); // default state
  li.appendChild(btn);

  // Mark as completed
  li.addEventListener('click', () => {
    li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    li.classList.toggle('completed');
  });

  // Delete task
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  Tasks.appendChild(li);
  document.querySelector('#tasks').value = '';
});

// Filter buttons (outside submit)
allBtn.addEventListener('click', () => {
  filterTasks('all');
});

pendBtn.addEventListener('click', () => {
  filterTasks('pending');
});

cmpltBtn.addEventListener('click', () => {
  filterTasks('completed');
});

// Function to filter tasks
function filterTasks(type) {
  const allTasks = document.querySelectorAll('li');
  allTasks.forEach((task) => {
    switch (type) {
      case 'all':
        task.style.display = 'block';
        break;
      case 'pending':
        task.style.display = task.style.textDecoration !== 'line-through'? 'block' : 'none';
        break;
      case 'completed':
        task.style.display = task.classList.contains('completed') ? 'block' : 'none';
        break;
    }
  });
}

const inputElement = document.querySelector('.new-task-input') //Acessando o input
const addTaskButton = document.querySelector('.new-task-button') // Acessando o button

const tasksContainer = document.querySelector('.tasks-container')

const validateInput = () => inputElement.value.trim().length > 0; //Meio de validar o input

handleAddTask = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid){
        inputElement.classList.add('error') //Adiciona a classe 'error'
        return (false)
    }

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p')
    taskContent.innerText = inputElement.value; //Valor do input

    taskContent.addEventListener('click', () => handleClick(taskContent))

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('fa-solid')
    deleteItem.classList.add('fa-trash')

    deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent))

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)

    inputElement.value = ''

}


    const handleClick = (taskContent) => {
        const tasks = tasksContainer.childNodes;

        for(const task of tasks){
            if(task.firstChild === (taskContent)){
                task.firstChild.classList.toggle('completed') //Adicionando o completed na tarefa
            }
        }


    }


const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes; //Acessar os 'filhos' do taskscontainer

    for(const task of tasks){ //Acessando a tarefa das tarefas
        if(task.firstChild === (taskContent)){ //Descobrindo qual tarefa está clicando
            taskItemContainer.remove()
        }
    }

}

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if(inputIsValid){
        return inputElement.classList.remove('error') //Removendo o erro
    }
}

addTaskButton.addEventListener('click', () => handleAddTask());
inputElement.addEventListener('change', () => handleInputChange())

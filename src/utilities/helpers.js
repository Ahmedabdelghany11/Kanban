export function calcCompletedSubtasks(tasks) {
    let total = 0;

    tasks.map(task => {
        if (task.isCompleted === true) {
            total++;
        }
    })


    return total;
}
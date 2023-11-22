var queue = [];
var rear = -1;
var front = -1;
var total;

function enqueue() 
{

    total = document.getElementById('input_total_number').value;

    if (isNaN(total) || total <= 0) 
    {
        alert("Enter a valid positive number for total");
        return;
    }

    document.querySelector('input[id="input_total_number"]').disabled = true;

    if (front === 0 && rear === total - 1) 
    {
        alert("Queue is already full");
        document.querySelector('button[onclick="enqueue()"]').disabled = true;
        return;
    } 
    else 
    {
        let number = prompt("Enter number");

        if (isNaN(number) || number <= 0) 
        {
            alert("Enter a valid positive number");
            return;
        }

        if (front === -1 && rear === -1) 
        {
            front = front + 1;
            rear = rear + 1;
        } 
        else 
        {
            rear = rear + 1;
        }

        queue[rear] = number;
        display();
    }
}

function dequeue() 
{
    if (front === -1 && rear === -1) 
    {
        alert("Queue is already empty");
        document.querySelector('button[onclick="enqueue()"]').disabled = false;
    } 
    else 
    {
        queue[front] = "";

        if (front === rear) 
        {
            queue[rear] = "";
            rear = -1;
            front = -1;
        } 
        else 
        {
            front = front + 1;
        }

        document.querySelector('button[onclick="enqueue()"]').disabled = false;
        document.querySelector('input[id="input_total_number"]').disabled = true;
        display();
    }
}

function display() 
{
    var containerDiv = document.getElementById('queue');
    containerDiv.innerHTML = "";

    for (var i = 0; i < total; i++) 
    {
        var newDiv = document.createElement('div');
        newDiv.textContent = queue[i];
        newDiv.className = 'queue-item';
        containerDiv.appendChild(newDiv);
        containerDiv.style.backgroundColor = 'black';
        containerDiv.style.border = '3px solid yellow ';
    }
}

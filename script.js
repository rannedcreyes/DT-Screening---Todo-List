const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function handleEnter(event) {
    if (event.key === "Enter") {
        addTask();
    }
}
function addTask()
{
    if(inputBox.value === '')
        {
        alert("You must write something!");
        return;
        }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        li.addEventListener("click", function () 
        {li.classList.toggle("completed");
        });

        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times;";

        span.addEventListener("click", function () 
        {li.remove();})
        li.appendChild(span);
        }    
    inputBox.value = "";
}

    
let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
let saveCount = 0;

function save(){
    if (saveCount == 0){
        saveEl.textContent += count
        countEl.textContent = 0;
        count = 0
        saveCount += 1
    }
    else{
        let newSave = " - " + count
        saveEl.textContent += newSave
        countEl.textContent = 0;
        count = 0
    }
}



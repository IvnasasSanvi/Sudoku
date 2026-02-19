var numSelected = null;
var tileSelected = null;
var errors = 0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];
var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758691234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];
window.onload = function() {
    setGame();
}

function setGame() {
    // for (let r = 0; r < 9; r++) {
    //     for (let c = 0; c < 9; c++) {
    //         let tile = document.createElement("p");
    //         tile.id = r.toString() + "-" + c.toString();
    //         tile.innerText = board[r][c];
    //         if (board[r][c] != "-") {
    //             tile.classList.add("tile-start");
    //         }
    //         tile.addEventListener("click", selectTile);
    //         document.getElementById("board").appendChild(tile);
    //     }   
    // }
    for (let i = 1; i <= 9; i++) {
        let num = document.createElement("p");
        num.id = i.toString();
        num.innerText = i.toString();
        num.addEventListener("click", selectNumber);
        document.getElementById("digits").appendChild(num);
    }   
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);  
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            this.classList.add("tile-correct");
            numSelected.classList.add("num-correct");
            numSelected = null;
            tileSelected = null;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = "Errors: " + errors;
            this.classList.add("tile-wrong");
            numSelected.classList.add("num-wrong"); 
            setTimeout(function() {
                this.classList.remove("tile-wrong");
                numSelected.classList.remove("num-wrong");
                numSelected = null;
                tileSelected = null;
            }
            .bind(this), 500);
        }
    }
}


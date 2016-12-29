var money = 0;

function work(x) {
    money = money + x;
    document.getElementById("money").innerHTML = money;
} ;

var worker = 0;

function hireWorker() {
    
    var workerCost = Math.floor(10 * Math.pow(1.1, worker));
    
    if (money >= workerCost) {
        money = money - workerCost;
        document.getElementById("money").innerHTML = money;
        
        worker = worker + 1;
        document.getElementById("worker").innerHTML = worker;
        
        workerCost = Math.floor(10 * Math.pow(1.1, worker));
        document.getElementById("workerCost").innerHTML = workerCost;
    } ;
};


function reset() {
    money = 0;
    document.getElementById("money").innerHTML = money;
    worker = 0;
    document.getElementById("worker").innerHTML = worker;
    workerCost = Math.floor(10 * Math.pow(1.1, worker));
    document.getElementById("workerCost").innerHTML = workerCost;
};

window.setInterval(function() {
    work(worker);
}, 1000);    
    

// currying

function automailer(to){
    return function(sub){
        return function(body){
            console.log(
                `mail has been sent to ${to} with subject ${sub} and body ${body}`
            );
        };
    };
};

automailer("abc@gmail.com")("iphone")("order confirmed");



function tenpercent(salary){
    return salary * 0.1;
}

let salary = [1, 2, 3, 4];

Array.prototype.calculatetax = function(cb){
    let res = [];
    for(let i = 0; i < this.length; i++){
        res.push(cb(this[i]));   // <-- callback applied
    }

    return res;
};

let ans = salary.calculatetax(tenpercent);
console.log(ans);

//homework -> Difference b/w array & html collection.
//homework -> Difference html collection & node list.
//homework -> node list vs array list.
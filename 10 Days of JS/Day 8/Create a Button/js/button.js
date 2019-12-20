// var btn = document.createElement("btn");
// btn.addEventListener("click", function() {
//     var currentval = this.innerHTML;
//     this.innerHTML = parseInt(currentval) + 1;
// })

var btn = document.createElement('button');

btn.id = 'btn';
btn.innerHTML = 0;
document.body.appendChild(btn);

btn.addEventListener("click", function() {

    var currentval = this.innerHTML;
    this.innerHTML = parseInt(currentval) + 1;
})
//  BUDGET CONTROLLER
var budgetController = (function() {



})();


//UI CONTROLLER
var UIController = (function() {

    //later some code

})();


//GLOBAL APP CONTROLLERs
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
         /*
            1. get data from input
            2. add item to budget controller
            3. add the item to UI controller
            4. calculate budget
            5. display budget on UI
         */
        console.log('it comes from ctrlAddItem function :)');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);
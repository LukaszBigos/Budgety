(function () {
    'use strict';


    //  BUDGET CONTROLLER
    var budgetController = (function () {

        var Expense = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        var allExpenses = [];
        var allIncomes = [];
        var totalExpenses = 0;

    })();


    //UI CONTROLLER
    var UIController = (function () {

        var DOMstrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn'
        };

        return {
            getInput: function () {
                return {
                    type: document.querySelector(DOMstrings.inputType).value, //inc or exp
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value
                };
            },

            getDOMstrings: function () {
                return DOMstrings;
            }
        };

    })();


    //GLOBAL APP CONTROLLERS
    var controller = (function (budgetCtrl, UICtrl) {

        var setupEventListeners = function () {

            var DOM = UICtrl.getDOMstrings();
            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

            document.addEventListener('keypress', function (event) {
                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem();
                }
            });
        };

        var ctrlAddItem = function () {

            //1. get data from input

            var input = UICtrl.getInput();
            console.log(input);
            /*
                2. add item to budget controller
                3. add the item to UI controller
                4. calculate budget
                5. display budget on UI
             */

        };

        return {
            init: function() {
                console.log('init works!');
                setupEventListeners();
            }
        };

    })(budgetController, UIController);

    controller.init();

})();
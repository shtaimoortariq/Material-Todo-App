/**
 * Created by Taimoor tariq on 1/2/2016.
 */

(function () {
    angular.module("myApp", ["ngMaterial", "ngMdIcons"])

        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
        })

        .controller("toDoAppController", [toDoAppController]);

    function toDoAppController() {
        var _self = this;

        this.myTask = "";
        this.allTasks = [];
        this.allTaskLength = 0;
        this.completedTask = [];
        this.completedTaskLength = 0;
        this.removeIndex = 0;

        this.addTask = function (task) {

            if (_self.myTask == "") {
                alert("Plz fill input");
            }
            else {
                _self.allTasks.push(task);
                _self.allTaskLength = _self.allTasks.length;
                _self.completedTaskLength++;
                _self.myTask = "";
            }

        };

        this.selectedTask = function (task) {

            _self.removeIndex = _self.completedTask.indexOf(task);
            if (_self.removeIndex > -1)
                _self.completedTask.splice(_self.removeIndex, 1);

            else
                _self.completedTask.push(task);

            _self.completedTaskLength = _self.allTaskLength -_self.completedTask.length;
            console.log(_self.completedTaskLength);

        };


        this.deleteTask = function () {
          _self.completedTask = [];



        }
    }
})();

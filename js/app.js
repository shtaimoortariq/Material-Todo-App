/**
 * Created by Taimoor tariq on 1/2/2016.
 */


var app = angular.module("myApp", ["ngMaterial", "ngMdIcons"]);


app.controller("toDoAppController", function () {

    var self = this;

    this.myTask = "";
    this.allTasks = [];
    this.allTaskLength = 0;
    this.completedTask = [];
    this.completedTaskLength = 0;
    this.removeIndex = 0;

    this.addTask = function (task) {

        if (this.myTask == "") {
            alert("Plz fill input");
        }
        else {
            this.allTasks.push(task);
            this.allTaskLength = this.allTasks.length;
            this.myTask = "";
        }

    };

    this.selectedTask = function (task) {

        this.removeIndex = this.completedTask.indexOf(task);
        if (this.removeIndex > -1)
            this.completedTask.splice(this.removeIndex, 1);
        else
            this.completedTask.push(task);
        this.completedTaskLength = this.completedTask.length;
        console.log(this.completedTaskLength);

    }


});
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
});


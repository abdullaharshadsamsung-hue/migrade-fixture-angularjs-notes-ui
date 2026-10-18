angular.module("notesApp", []).controller("NotesController", function () {
  var vm = this;
  vm.title = "";
  vm.notes = [
    { id: 1, title: "Buy milk", body: "Two litres" },
    { id: 2, title: "Call Sam", body: "About the trip" },
  ];

  vm.add = function () {
    var title = (vm.title || "").trim();
    if (!title) return;
    var nextId = vm.notes.reduce(function (max, n) { return Math.max(max, n.id); }, 0) + 1;
    vm.notes.push({ id: nextId, title: title, body: "" });
    vm.title = "";
  };

  vm.remove = function (id) {
    vm.notes = vm.notes.filter(function (n) { return n.id !== id; });
  };
});

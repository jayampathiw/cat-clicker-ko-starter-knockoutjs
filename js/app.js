function AppViewModel() {
   this.clickCount = ko.observable(0);
   this.name = ko.observable("Tobby");
   
   this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
   this.imgAttribute = ko.observable('www.google.com');

   this.incrementCounter = function(){
   		this.clickCount(this.clickCount() + 1);
   }

   this.level = ko.computed(function(){
   		if(this.clickCount() > 10){
   			return "Infent";
   		} else if(this.clickCount() < 10 && this.clickCount() > 20) {
   			return "teen"
   		} else {
   			return "New Born";
   		}
   }, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
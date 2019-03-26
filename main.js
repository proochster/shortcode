(function(){
    var sc = {
        searchInput: document.querySelector('.search__input'),
        shortCodes: document.querySelectorAll('.sc'),
        searchCount: document.querySelector('.search__count'),

        // Returns true if the input text value matches the content
        hasPhrase: function(block, element, query){

            var text = block.querySelector(element);
            if(text){
                return text.innerHTML.toLowerCase().indexOf(query)>=0
            } else {
                return false
            }
        },

        updateCount: function(c){
            switch(c){
                case 0 : return "Sorry, we haven't got this record yet. <a href=\"https://github.com/proochster/shortcode/issues\">Submit a request here</a>";
                case 1 : return "<strong>1</strong> result found";
                default : return "<strong>" + c + "</strong> results found";
            }
        },

        // Search shortcode
        searchAll: function(){

            var self=this;
            var counter = self.shortCodes.length;
            self.searchCount.innerHTML = self.updateCount(counter);
            
            this.searchInput.onkeyup = function(){
                
                // Reset search counter
                counter = 0;
                
                // Searched term value
                var inputPhrase = self.searchInput.value.toLowerCase();
                
                // Loop through the list of shortcodes
                self.shortCodes.forEach(function(code){
                    
                    // Reset display of the shortcodes
                    code.setAttribute('data-display','false');
                    
                    // Look for the searched phrase in title and desccription
                    if(self.hasPhrase(code,'.sc__title',inputPhrase) || self.hasPhrase(code,'.sc__text',inputPhrase)){
                        code.setAttribute('data-display','true');
                        
                        // Count elements that match the searched term
                        counter++;
                    }
                });

                // Update the counter after the search is finished
                self.searchCount.innerHTML = self.updateCount(counter);
            };
        },

        init: function(){
            this.searchAll();
        }
    }

    if( sc.searchInput && sc.shortCodes ){
        return sc.init();
    }
})();
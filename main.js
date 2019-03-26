(function(){
    var sc = {
        searchInput: document.querySelector('.search__input'),
        shortCodes: document.querySelectorAll('.sc'),

        // Returns true if the input text value matches the content
        hasPhrase: function(block, element, query){

            var text = block.querySelector(element);
            if(text){
                return text.innerHTML.toLowerCase().indexOf(query)>=0
            } else {
                return false
            }
        },

        // Search shortcode
        searchAll: function(){

            var self=this;
            this.searchInput.onkeyup = function(){
                
                // Searched term value
                var inputPhrase = self.searchInput.value.toLowerCase();

                // Loop through the list of shortcodes
                self.shortCodes.forEach(function(code){

                    // Reset display of the shortcodes
                    code.setAttribute('data-display','false');

                    // Look for the searched phrase in title and desccription
                    if(self.hasPhrase(code,'.sc__title',inputPhrase) || self.hasPhrase(code,'.sc__text',inputPhrase)){
                        code.setAttribute('data-display','true');
                    }
                });
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
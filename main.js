(function(){
    var sc = {
        searchInput: document.querySelector('.search__input'),
        shortCodes: document.querySelectorAll('.sc'),

        // Returns true if the input text value matches the content
        hasPhrase: function(record, element){
            var inputPhrase = this.searchInput.value.toLowerCase();
            return record.querySelector(element).innerHTML.toLowerCase().indexOf(inputPhrase)>=0
        },

        // Search shortcode
        searchAll: function(){

            var self=this;
            this.searchInput.onkeyup = function(){

                // Loop through the list of shortcodes
                self.shortCodes.forEach(function(code){

                    // Reset display of the shortcodes
                    code.setAttribute('data-display','false');

                    // Look for the searched phrase in title and desccription
                    if(self.hasPhrase(code,'.sc__title') || self.hasPhrase(code,'.sc__text')){
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
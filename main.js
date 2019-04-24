(function(){
    var sc = {
        searchInput: document.querySelector('.search__input'),
        shortCodes: document.querySelectorAll('.sc'),
        searchCount: document.querySelector('.search__count'),
        searchWrapper: document.querySelector('.search__wrapper'),
        urlParams: new URLSearchParams(location.search),

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

        querySelector: function(){

            if(this.urlParams.has("code")){
                
                // Populate search input
                this.searchInput.value = this.urlParams.get("code");

                // Run the search loop
                this.searchLoop();
            }
        },

        searchLoop: function(){
                
            var self = this;
            
            // Reset search counter
            counter = 0;
            
            // Searched term value
            var inputPhrase = this.searchInput.value.toLowerCase();
            
            // Loop through the list of shortcodes
            this.shortCodes.forEach(function(code){

                // Check if query matches exactly the code title
                if(self.urlParams.get("code") === code.querySelector(".sc__title").innerHTML.toLowerCase()){

                    // Update page title
                    var title = document.title;
                    document.title = self.urlParams.get("code") + " | " + title;
                }
                
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
            this.searchCount.innerHTML = this.updateCount(counter);
        },

        // Search shortcode
        search: function(){

            var self = this;
            var counter = self.shortCodes.length;
            self.searchCount.innerHTML = self.updateCount(counter);
          
            this.searchInput.onkeyup = function(){
                
                self.searchLoop();
                self.updateSearchIcon();
                self.clearSearch();
            }
        },

        updateSearchIcon: function(){

            if (this.searchInput.value) {
                this.searchInput.nextElementSibling.classList.add('search__clear');
            } else {
                this.searchInput.nextElementSibling.classList.remove('search__clear');
            }
        },

        clearSearch: function(){

            var self = this;

            if(this.searchWrapper.querySelector('.search__clear')){
                this.searchWrapper.querySelector('.search__clear').onclick = function(){
                    self.searchInput.value = '';
                    self.searchLoop();
                    self.updateSearchIcon();
                };
            }
        },

        init: function(){
            this.search();
            this.querySelector();
        }
    }

    if( sc.searchInput && sc.shortCodes ){
        return sc.init();
    }
})();
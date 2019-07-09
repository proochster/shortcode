(function(){
    var sc = {
        searchInput: document.querySelector('.js-search'),
        codesSearchInput: document.querySelector('.js-codes-search'),
        shortCodes: document.querySelectorAll('.sc'),
        searchCount: document.querySelector('.search__count'),
        searchWrapper: document.querySelector('.search__wrapper'),
        optionsList: document.querySelector('.options-list'),        
        copyButton: document.querySelectorAll('.sc__copy'),

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

        searchLoop: function(){
                
            var self = this;
            
            // Reset search counter
            counter = 0;
            
            // Searched term value
            var inputPhrase = this.searchInput.value.toLowerCase();
            
            // Loop through the list of shortcodes
            this.shortCodes.forEach(function(code){
                
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

        copyText: function(){
                        
            this.copyButton.forEach(function(btn){
                btn.addEventListener('click', function(){

                    let str = btn.parentElement.querySelector('[data-lang]').innerText;                    
                    let el = document.createElement('textarea');
                    let copyText = btn.querySelector('.sc__copy-text');

                    el.value = str;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);

                    copyText.innerText = "copied";

                    setTimeout(function () {                    
                        copyText.innerText = "copy";
                    }, 1000)

                });
            });
        },

        searchAll: function(){

            var self = this;

            this.codesSearchInput.onchange = function(e){
                // e.preventDefault();
                // e.options[e.selectedIndex].value;
                // console.log(this.value + '. ' + sel);
                // console.log(sel.options[sel.selectedIndex]);
                // console.log("datalist" + e);

                self.optionsList.onchange();

                // console.log(this.nextElementSibling.querySelector('.options-list').options);

                // var e = document.getElementById("ddlViewBy");
                // var strUser = e.options[e.selectedIndex].value;
            },
            
            this.optionsList.addEventListener('change', e => console.log(`Capturing: ${elem.tagName}`), true);

            // this.optionsList.onchange = function(e){
            //     console.log(e);
                
            //     // var index = this.selectedIndex;

            //     // console.log(`From onchange trigger: ${index}`);
            //     // console.dirxml(this);
            // }
        },

        homeInit: function(){
            this.searchAll();
        },

        searchInit: function(){
            this.search();
        },

        copyInit: function(){
            this.copyText();
        }
    }

    if( sc.codesSearchInput ){
        return sc.homeInit();
    }

    if( sc.searchInput ){
        return sc.searchInit();
    }

    if( sc.shortCodes ){
        return sc.copyInit();
    }
})();
(function(){
    var search = {
        searchInput: document.querySelector('.search__input'),
        shortCodes: document.querySelectorAll('.sc'),

        searchAll: function(){

            var self=this;

            this.searchInput.onkeyup = function(){

                var phrase = this.value;

                self.shortCodes.forEach(function(code){

                    code.setAttribute('data-display','false');

                    if(code.querySelector('.sc__title').innerHTML.toLowerCase().indexOf(phrase.toLowerCase())>=0){
                        code.setAttribute('data-display','true');
                    }
                
                });

            };
        },
        init: function(){
            this.searchAll();
        }
    }
    return search.init();
})();
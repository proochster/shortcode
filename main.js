var app=new Vue({
    el: "#sc",
    data: function(){
            return {
            search: '',
            codes: document.querySelectorAll('.sc')
        };
    },
    created(){
        console.log(this.filteredCodes);
    },
    computed:
    {
        filteredCodes:function()
        {
            var self=this;

            // NodeList needs to be converted to an Array before being filtered
            codesArray = Array.prototype.slice.call(this.codes);
            
            return codesArray.filter(function(sc){
                return sc.querySelector(".sc__title").innerHTML.toLowerCase().indexOf(self.search.toLowerCase())>=0;
            });
        },
        allRecords:function()
        {
            return codes = document.querySelectorAll('.sc');
        }
    } 
});
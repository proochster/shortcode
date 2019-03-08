var app=new Vue({
    el: "#sc",
    data: function(){
            return {
            search: '',
            // shortcode: "",
            codes: this.allRecords
        };
    },
    created(){
        console.log(this.allRecords);
    },
    computed:
    {
        filteredCustomers:function()
        {
        var self=this;
           return this.codes.filter(function(sc){return sc.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
           //return this.codes;
        },
        allRecords:function()
        {
            return codes = document.querySelectorAll('.sc');
        },
        allTitles:function()
        {
        }
    }
});
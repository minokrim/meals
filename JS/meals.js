$.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    type: "get",
    datatype:"json",

    success:function(response){
        //use for all loop to first loop through the meals array
        for(var i=0; i<response.meals.length; i++){
            var newmeal="<div class='col-md-4'><p>"+response.meals[i].strMeal+"</p><img id='fd_img' src="+response.meals[i].strMealThumb+"></div"
            
            $('.main_body').append(newmeal)
        }
    },
    error:function(error){
        console.log(error)
    },
    always:function(){}
})
/**
 * Created by thunder on 10/19/14.
 */
framework.on('load', function() {

    framework.middleware('categories', function(req, res, next, options, controller) {


        if (controller)
        {
            var model_categorie = controller.model('categorie');

            model_categorie.getAll(function(rows){
                controller.repository.categorii = rows;
                next();
            });
        }



    });

});
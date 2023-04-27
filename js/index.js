  $(function(){
          $('[data-toggle="tooltip"]').tooltip();
          $('[data-toggle="popover"]').popover();
          $('.carousel').carousel({
              interval: 2000
          });

          $('#contactoBtn').on('show.bs.modal', function(e){
             console.log('el modal contacto se esta mostrando')

             $('#contactoBtn').removeClass('btn-outline-success')
             $('#contactoBtn').addClass('btn-primary')
             $('#contactoBtn').prop('disabled', true)

          });
          $('#contactoBtn').on('show.bs.modal', function(e){
             console.log('el modal contacto se mostró')
          });
          $('#contactoBtn').on('hide.bs.modal', function(e){
             console.log('el modal contacto se oculta')
          });
          $('#contactoBtn').on('hiden.bs.modal', function(e){
             console.log('el modal contacto se ocultó')
             $('#contactoBtn').prop('disabled', false)
          });
       }); 

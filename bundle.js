// Identificador único para el usuario
    const commenterId = Date.now();

    // URL del servidor Node.js
    const serverUrl = 'http://localhost:3000/comments';

    // Función para manejar el cambio en la selección del tipo de comentario
    document.getElementById('commentType').addEventListener('change', function() {
      var selectedOption = this.value;
      var nameField = document.getElementById('nameField');

      if (selectedOption === 'nombre') {
        nameField.classList.remove('hidden');
      } else {
        nameField.classList.add('hidden');
      }
    });

    // Función para manejar el envío del formulario
    document.getElementById('commentForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío por defecto
      
      // Obtener valores del formulario
      var username = document.getElementById('username').value;
      var commentType = document.getElementById('commentType').value;
      var comment = document.getElementById('comment').value;

      // Crear un identificador único para el comentario (simulación)
      var commentId = Date.now();

      // Crear un objeto para almacenar el comentario
      var newComment = {
        commenterId: commenterId,
        username: commentType === 'nombre' ? username : '',
        comment: comment
      };

      // Enviar el comentario al servidor
      fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      })
      .then(response => response.json())
      .then(data => {
        // Mostrar los comentarios actualizados
        showComments();
      });
    });

    // Función para mostrar los comentarios almacenados
    function showComments() {
      fetch(serverUrl)
        .then(response => response.json())
        .then(comments => {
          // Limpiar la lista de comentarios antes de mostrar los nuevos
          document.getElementById('commentList').innerHTML = '';

          // Iterar sobre los comentarios y mostrar cada uno
          comments.forEach(comment => {
            var commentElement = document.createElement('div');
            commentElement.classList.add('comment');

            var commenterInfo = document.createElement('p');
            if (comment.username) {
              commenterInfo.textContent = `Nombre: ${comment.username}`;
            } else {
              commenterInfo.textContent = 'Anónimo';
            }

            var commentText = document.createElement('p');
            commentText.textContent = comment.comment;

            var deleteButton = document.createElement('span');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', function() {
              deleteComment(comment.id);
            });

            commentElement.appendChild(commenterInfo);
            commentElement.appendChild(commentText);
            commentElement.appendChild(deleteButton);

            document.getElementById('commentList').appendChild(commentElement);
          });
        });
    }

    // Función para eliminar un comentario
    function deleteComment(commentId) {
      fetch(`${serverUrl}/${commentId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        // Mostrar los comentarios actualizados después de eliminar
        showComments();
      });
    }

    // Mostrar los comentarios inicialmente al cargar la página
    showComments();

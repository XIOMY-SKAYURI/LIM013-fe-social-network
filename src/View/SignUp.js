export default () => {
  const viewSignUp = `
    <section>
        <h2>Create an account using</h2>
        <button></button>
        <h2>Create new account here </h2>
        <!--campo de texto-->
        <p>
            <label for="camponombre">Names:</label>
            <input type="text" name="name" placeholder="name" id="name">
        </p>
        <p>
            <label for="camposurname">Surnames:</label>
            <input type="text" name="surnames" placeholder="surnames" id="surnames">
        </p>
        <p>
            <label for="campouser">User:</label>
            <input type="text" name="user" placeholder="user" id="user">
        </p>
        <!--campo de email-->
        <p>
            <label for="email">Email address:</label>
            <input type="email" name="email" id="email">
        </p>
        <!--campo de contraseña-->
        <p>
            <label for="password">contraseña:</label>
            <input type="password" name="algo" id="password">
        </p>
    </section>
    `;

  // creamos un nuevo elemento div  y agregamos  viewsingup
  const divElemt = document.createElement('section');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewSignUp;
  return divElemt;// retorname el nuevo elemento
};

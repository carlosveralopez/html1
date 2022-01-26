<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Aprendible</title>
</head>
<body>
    @include('partials.nav')
    <h1>Login Aprendible</h1>

   
    <form method="POST">
        @csrf
        <label>
            <input name="email" type="email" required autofocus value="{{ old('email') }}" placeholder="Email">
        </label>
        @error('email') {{$message}} @enderror
        <br>
        <label>
            <input name="password" type="password" required placeholder="Contraseña">
        </label>
        @error('password') {{$message}} @enderror
        <br>
        <button type="submit">Login</button>
        <label>
            <input type="checkbox" name="remember">
            Recuerdame
        </label> 
    </form>
</body>
</html>
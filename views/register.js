<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Register Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="/css/form.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <% if (messages.error) { %>
        <%= messages.error %>
            <% } %>
                <div class="container">
                    <form class="form-1" action="/register" method="POST">
                        <h1>Registration</h1>
                        <label for="name">Name</label>
                        <input type="name" name="name" id="name" required />
                        <label for="email">Email</label>
                        <input type="email" name="username" id="username" required />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required />
                        <!-- <span>Forgot Password</span> -->
                        <button type="submit">Register</button>

                        <!-- .........///sign-up///.......... -->

                        <p>Sign In</p>
                        <div class="icons">
                            <a href="/login" style="padding-top: 7px;" target="blank"><i
                                    class="fa-solid fa-arrow-right-to-bracket fa-2x"></i></a>
                            <!-- <a href="/login" target="blank"><i class="fab fa-google"></i></a> -->
                        </div>
                    </form>
                </div>


                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossorigin="anonymous"></script>
</body>
</body>

</html>

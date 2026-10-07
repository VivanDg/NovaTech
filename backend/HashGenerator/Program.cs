using BCrypt.Net;

string password = "Nova1234";

string hash = "$2a$11$OZ4r4FZPbP7mGlymlC47qu31vWHbG.tgqdaaAv.wln9vCwWohb1qO";

bool resultado = BCrypt.Net.BCrypt.Verify(password, hash);

Console.WriteLine($"Contraseña: {password}");
Console.WriteLine($"Hash BD: {hash}");
Console.WriteLine($"Resultado: {resultado}");
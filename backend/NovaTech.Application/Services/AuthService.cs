using NovaTech.Application.common.DTOs;
using NovaTech.Application.Interfaces;

namespace NovaTech.Application.Services;

public class AuthService : IAuthService
{
    private readonly IUsuarioRepository _usuarioRepository;

    public AuthService(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    public async Task<LoginResponseDTO> LoginAsync(LoginDTO login)
    {
        string correo = login.Correo.Trim().ToLower();

        var usuario = await _usuarioRepository.ObtenerPorCorreoAsync(correo);

        if (usuario == null)
        {
            return new LoginResponseDTO
            {
                Exito_login = false,
                Mensaje_login = "El correo o la contraseña no son correctos."
            };
        }

        bool contrasenaCorrecta =  
            login.Password == usuario.passwordHash_Usuario;

        if (!contrasenaCorrecta)
        {
            return new LoginResponseDTO
            {
                Exito_login = false,
                Mensaje_login = "El correo o la contraseña no son correctos."
            };
        }

        return new LoginResponseDTO
        {
            Exito_login = true,
            Mensaje_login = "Inicio de sesión correcto."
        };
    }
}
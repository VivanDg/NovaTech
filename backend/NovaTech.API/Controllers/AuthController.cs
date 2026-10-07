using Microsoft.AspNetCore.Mvc;
using NovaTech.Application.common.DTOs;
using NovaTech.Application.Interfaces;

namespace NovaTech.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO login)
    {
        if (login == null)
        {
            return BadRequest(new LoginResponseDTO
            {
                Exito_login = false,
                Mensaje_login = "Los datos de acceso son obligatorios."
            });
        }

        var resultado = await _authService.LoginAsync(login);

        return Ok(resultado);
    }
}